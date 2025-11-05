import { useUserInfo } from "@/store/userStore";
import type { PermissionAction, PermissionResource } from "#/enum";

/**
 * 权限验证Hook
 * 提供权限判断相关的方法
 */
export function usePermission() {
	const userInfo = useUserInfo();
	const roles = userInfo.roles || [];
	const permissions = userInfo.permissions || [];

	/**
	 * 检查用户是否是超级管理员
	 * @returns {boolean} 是否为超级管理员
	 */
	const isSuperAdmin = (): boolean => {
		return roles.some((role) => role.isSuperAdmin);
	};

	/**
	 * 检查用户是否具有指定的角色
	 * @param roleCode 角色代码
	 * @returns {boolean} 是否具有该角色
	 */
	const hasRole = (roleCode: string): boolean => {
		if (isSuperAdmin()) return true;
		return roles.some((role) => role.code === roleCode);
	};

	/**
	 * 检查用户是否具有指定的权限
	 * @param permissionCode 权限代码（格式：resource:action）
	 * @returns {boolean} 是否具有该权限
	 */
	const hasPermission = (permissionCode: string): boolean => {
		if (isSuperAdmin()) return true;
		return permissions.some((permission) => permission.code === permissionCode);
	};

	/**
	 * 检查用户是否具有指定资源的指定操作权限
	 * @param resource 资源名称
	 * @param action 操作名称
	 * @returns {boolean} 是否具有该权限
	 */
	const hasResourcePermission = (resource: PermissionResource, action: PermissionAction): boolean => {
		if (isSuperAdmin()) return true;
		const permissionCode = `${resource}:${action}`;
		return permissions.some((permission) => permission.code === permissionCode);
	};

	/**
	 * 检查用户是否具有指定权限中的任意一个
	 * @param permissionCodes 权限代码数组
	 * @returns {boolean} 是否具有任意一个权限
	 */
	const hasAnyPermission = (permissionCodes: string[]): boolean => {
		if (isSuperAdmin()) return true;
		return permissionCodes.some((code) => permissions.some((p) => p.code === code));
	};

	/**
	 * 检查用户是否具有指定的所有权限
	 * @param permissionCodes 权限代码数组
	 * @returns {boolean} 是否具有所有权限
	 */
	const hasAllPermissions = (permissionCodes: string[]): boolean => {
		if (isSuperAdmin()) return true;
		return permissionCodes.every((code) => permissions.some((p) => p.code === code));
	};

	/**
	 * 检查用户是否具有指定角色中的任意一个
	 * @param roleCodes 角色代码数组
	 * @returns {boolean} 是否具有任意一个角色
	 */
	const hasAnyRole = (roleCodes: string[]): boolean => {
		if (isSuperAdmin()) return true;
		return roleCodes.some((code) => roles.some((r) => r.code === code));
	};

	/**
	 * 检查用户是否具有指定的所有角色
	 * @param roleCodes 角色代码数组
	 * @returns {boolean} 是否具有所有角色
	 */
	const hasAllRoles = (roleCodes: string[]): boolean => {
		if (isSuperAdmin()) return true;
		return roleCodes.every((code) => roles.some((r) => r.code === code));
	};

	/**
	 * 获取用户的所有权限代码
	 * @returns {string[]} 权限代码数组
	 */
	const getAllPermissionCodes = (): string[] => {
		return permissions.map((p) => p.code);
	};

	/**
	 * 获取用户的所有角色代码
	 * @returns {string[]} 角色代码数组
	 */
	const getAllRoleCodes = (): string[] => {
		return roles.map((r) => r.code);
	};

	return {
		isSuperAdmin,
		hasRole,
		hasPermission,
		hasResourcePermission,
		hasAnyPermission,
		hasAllPermissions,
		hasAnyRole,
		hasAllRoles,
		getAllPermissionCodes,
		getAllRoleCodes,
	};
}
