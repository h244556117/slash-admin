import type { ReactNode } from "react";
import { usePermission } from "@/hooks/use-permission";
import type { PermissionAction, PermissionResource } from "#/enum";

interface PermissionGuardProps {
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
	 * 权限不足时的显示模式
	 * - 'hidden': 隐藏内容
	 * - 'disabled': 显示内容但禁用交互
	 */
	mode?: "hidden" | "disabled";
	/**
	 * 权限不足时显示的自定义内容
	 */
	fallback?: ReactNode;
	/**
	 * 子内容
	 */
	children: ReactNode;
}

/**
 * 权限守卫组件
 * 根据用户权限控制内容的显示与隐藏
 */
export function PermissionGuard({
	permission,
	resource,
	action,
	mode = "hidden",
	fallback,
	children,
}: PermissionGuardProps) {
	const { hasPermission, hasResourcePermission } = usePermission();

	// 验证权限
	let hasAccess = false;
	if (permission) {
		hasAccess = hasPermission(permission);
	} else if (resource && action) {
		hasAccess = hasResourcePermission(resource, action);
	} else {
		// 没有提供任何权限验证条件，默认显示
		hasAccess = true;
	}

	// 权限不足时的处理
	if (!hasAccess) {
		if (mode === "hidden") {
			return null;
		} else if (mode === "disabled") {
			return <div className="opacity-50 pointer-events-none">{children}</div>;
		} else if (fallback) {
			return fallback;
		} else {
			return null;
		}
	}

	return children;
}

interface RoleGuardProps {
	/**
	 * 需要验证的角色代码
	 */
	role: string;
	/**
	 * 权限不足时的显示模式
	 * - 'hidden': 隐藏内容
	 * - 'disabled': 显示内容但禁用交互
	 */
	mode?: "hidden" | "disabled";
	/**
	 * 权限不足时显示的自定义内容
	 */
	fallback?: ReactNode;
	/**
	 * 子内容
	 */
	children: ReactNode;
}

/**
 * 角色守卫组件
 * 根据用户角色控制内容的显示与隐藏
 */
export function RoleGuard({ role, mode = "hidden", fallback, children }: RoleGuardProps) {
	const { hasRole } = usePermission();
	const hasAccess = hasRole(role);

	// 权限不足时的处理
	if (!hasAccess) {
		if (mode === "hidden") {
			return null;
		} else if (mode === "disabled") {
			return <div className="opacity-50 pointer-events-none">{children}</div>;
		} else if (fallback) {
			return fallback;
		} else {
			return null;
		}
	}

	return children;
}

interface AuthGuardProps {
	/**
	 * 需要验证的权限代码数组
	 */
	permissions?: string[];
	/**
	 * 需要验证的角色代码数组
	 */
	roles?: string[];
	/**
	 * 验证模式
	 * - 'any': 任意一个权限或角色满足即可
	 * - 'all': 所有权限和角色都满足才行
	 */
	mode?: "any" | "all";
	/**
	 * 权限不足时的显示模式
	 * - 'hidden': 隐藏内容
	 * - 'disabled': 显示内容但禁用交互
	 */
	accessMode?: "hidden" | "disabled";
	/**
	 * 权限不足时显示的自定义内容
	 */
	fallback?: ReactNode;
	/**
	 * 子内容
	 */
	children: ReactNode;
}

/**
 * 综合权限守卫组件
 * 可以同时验证多个权限和角色
 */
export function AuthGuard({
	permissions = [],
	roles = [],
	mode = "any",
	accessMode = "hidden",
	fallback,
	children,
}: AuthGuardProps) {
	const { hasAnyPermission, hasAllPermissions, hasAnyRole, hasAllRoles } = usePermission();

	let hasAccess = false;

	// 处理权限验证
	const hasPermissionAccess =
		permissions.length > 0 ? (mode === "any" ? hasAnyPermission(permissions) : hasAllPermissions(permissions)) : true;

	// 处理角色验证
	const hasRoleAccess = roles.length > 0 ? (mode === "any" ? hasAnyRole(roles) : hasAllRoles(roles)) : true;

	// 综合验证结果
	hasAccess = hasPermissionAccess && hasRoleAccess;

	// 权限不足时的处理
	if (!hasAccess) {
		if (accessMode === "hidden") {
			return null;
		} else if (accessMode === "disabled") {
			return <div className="opacity-50 pointer-events-none">{children}</div>;
		} else if (fallback) {
			return fallback;
		} else {
			return null;
		}
	}

	return children;
}
