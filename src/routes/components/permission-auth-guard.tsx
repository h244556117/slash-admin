import type { ReactNode } from "react";
import { useUserToken, useUserInfo } from "@/store/userStore";
import { useCallback, useEffect } from "react";
import { useRouter } from "../hooks";
import { usePermission } from "@/hooks/use-permission";
import type { PermissionAction, PermissionResource } from "#/enum";

interface PermissionAuthGuardProps {
	/**
	 * 需要验证的权限代码
	 */
	permission?: string;
	/**
	 * 需要验证的资源和操作
	 */
	resource?: PermissionResource;
	action?: PermissionAction;
	/**
	 * 需要验证的角色代码
	 */
	role?: string;
	/**
	 * 权限不足时重定向的路径
	 */
	fallbackPath?: string;
	/**
	 * 子内容
	 */
	children: ReactNode;
}

/**
 * 权限验证路由守卫
 * 在路由跳转前验证用户权限
 */
export default function PermissionAuthGuard({
	permission,
	resource,
	action,
	role,
	fallbackPath = "/error/403",
	children,
}: PermissionAuthGuardProps) {
	const router = useRouter();
	const { accessToken } = useUserToken();
	const userInfo = useUserInfo();
	const { hasPermission, hasResourcePermission, hasRole, isSuperAdmin } = usePermission();

	const checkPermission = useCallback(() => {
		// 未登录用户重定向到登录页
		if (!accessToken) {
			router.replace("/auth/login");
			return false;
		}

		// 超级管理员跳过权限检查
		if (isSuperAdmin()) {
			return true;
		}

		// 验证角色
		if (role && !hasRole(role)) {
			router.replace(fallbackPath);
			return false;
		}

		// 验证权限
		let hasAccess = true;
		if (permission) {
			hasAccess = hasPermission(permission);
		} else if (resource && action) {
			hasAccess = hasResourcePermission(resource, action);
		}

		if (!hasAccess) {
			router.replace(fallbackPath);
			return false;
		}

		return true;
	}, [
		router,
		accessToken,
		permission,
		resource,
		action,
		role,
		fallbackPath,
		hasPermission,
		hasResourcePermission,
		hasRole,
		isSuperAdmin,
	]);

	useEffect(() => {
		checkPermission();
	}, [checkPermission]);

	// 权限检查未完成前显示加载状态
	if (!accessToken || !userInfo) {
		return <div>Loading...</div>;
	}

	// 检查权限
	const hasAccess = checkPermission();

	return hasAccess ? children : null;
}
