import useUserStore from "@/store/userStore";
import { BasicStatus, PermissionType } from "@/types/enum";
import { faker } from "@faker-js/faker";

/**
 * Organization data mock
 */
export const ORG_LIST = [
	{
		id: "1",
		name: "East China Branch",
		status: "enable",
		desc: faker.lorem.words(),
		order: 1,
		children: [
			{
				id: "1-1",
				name: "R&D Department",
				status: "disable",
				desc: "",
				order: 1,
			},
			{
				id: "1-2",
				name: "Marketing Department",
				status: "enable",
				desc: "",
				order: 2,
			},
			{
				id: "1-3",
				name: "Finance Department",
				status: "enable",
				desc: "",
				order: 3,
			},
		],
	},
	{
		id: "2",
		name: "South China Branch",
		status: "enable",
		desc: faker.lorem.words(),
		order: 2,
		children: [
			{
				id: "2-1",
				name: "R&D Department",
				status: "disable",
				desc: "",
				order: 1,
			},
			{
				id: "2-2",
				name: "Marketing Department",
				status: "enable",
				desc: "",
				order: 2,
			},
			{
				id: "2-3",
				name: "Finance Department",
				status: "enable",
				desc: "",
				order: 3,
			},
		],
	},
];

/**
 * User permission mock
 */
const DASHBOARD_PERMISSION = {
	id: "9100714781927703",
	parentId: "",
	label: "sys.nav.dashboard",
	name: "Dashboard",
	icon: "local:ic-analysis",
	type: PermissionType.CATALOGUE,
	route: "dashboard",
	order: 1,
	children: [
		{
			id: "8426999229400979",
			parentId: "9100714781927703",
			label: "sys.nav.workbench",
			name: "Workbench",
			type: PermissionType.MENU,
			route: "workbench",
			component: "/dashboard/workbench/index.tsx",
		},
		{
			id: "9710971640510357",
			parentId: "9100714781927703",
			label: "sys.nav.analysis",
			name: "Analysis",
			type: PermissionType.MENU,
			route: "analysis",
			component: "/dashboard/analysis/index.tsx",
		},
	],
};
const MANAGEMENT_PERMISSION = {
	id: "0901673425580518",
	parentId: "",
	label: "sys.nav.management",
	name: "Management",
	icon: "local:ic-management",
	type: PermissionType.CATALOGUE,
	route: "management",
	order: 2,
	children: [
		{
			id: "2781684678535711",
			parentId: "0901673425580518",
			label: "sys.nav.user.index",
			name: "User",
			type: PermissionType.CATALOGUE,
			route: "user",
			children: [
				{
					id: "4754063958766648",
					parentId: "2781684678535711",
					label: "sys.nav.user.profile",
					name: "Profile",
					type: PermissionType.MENU,
					route: "profile",
					component: "/management/user/profile/index.tsx",
				},
				{
					id: "2516598794787938",
					parentId: "2781684678535711",
					label: "sys.nav.user.account",
					name: "Account",
					type: PermissionType.MENU,
					route: "account",
					component: "/management/user/account/index.tsx",
				},
			],
		},
		{
			id: "0249937641030250",
			parentId: "0901673425580518",
			label: "sys.nav.system.index",
			name: "System",
			type: PermissionType.CATALOGUE,
			route: "system",
			children: [
				{
					id: "1985890042972842",
					parentId: "0249937641030250",
					label: "sys.nav.system.organization",
					name: "Organization",
					type: PermissionType.MENU,
					route: "organization",
					component: "/management/system/organization/index.tsx",
				},
				{
					id: "4359580910369984",
					parentId: "0249937641030250",
					label: "sys.nav.system.permission",
					name: "Permission",
					type: PermissionType.MENU,
					route: "permission",
					component: "/management/system/permission/index.tsx",
				},
				{
					id: "1689241785490759",
					parentId: "0249937641030250",
					label: "sys.nav.system.role",
					name: "Role",
					type: PermissionType.MENU,
					route: "role",
					component: "/management/system/role/index.tsx",
				},
				{
					id: "0157880245365433",
					parentId: "0249937641030250",
					label: "sys.nav.system.user",
					name: "User",
					type: PermissionType.MENU,
					route: "user",
					component: "/management/system/user/index.tsx",
				},
				{
					id: "0157880245365434",
					parentId: "0249937641030250",
					label: "sys.nav.system.user_detail",
					name: "User Detail",
					type: PermissionType.MENU,
					route: "user/:id",
					component: "/management/system/user/detail.tsx",
					hide: true,
				},
			],
		},
	],
};
const COMPONENTS_PERMISSION = {
	id: "2271615060673773",
	parentId: "",
	label: "sys.nav.components",
	name: "Components",
	icon: "solar:widget-5-bold-duotone",
	type: PermissionType.CATALOGUE,
	route: "components",
	order: 3,
	children: [
		{
			id: "2478488238255411",
			parentId: "2271615060673773",
			label: "sys.nav.icon",
			name: "Icon",
			type: PermissionType.MENU,
			route: "icon",
			component: "/components/icon/index.tsx",
		},
		{
			id: "6755238352318767",
			parentId: "2271615060673773",
			label: "sys.nav.animate",
			name: "Animate",
			type: PermissionType.MENU,
			route: "animate",
			component: "/components/animate/index.tsx",
		},
		{
			id: "9992476513546805",
			parentId: "2271615060673773",
			label: "sys.nav.scroll",
			name: "Scroll",
			type: PermissionType.MENU,
			route: "scroll",
			component: "/components/scroll/index.tsx",
		},
		// {
		// 	id: "2122547769468069",
		// 	parentId: "2271615060673773",
		// 	label: "sys.nav.editor",
		// 	name: "Editor",
		// 	type: PermissionType.MENU,
		// 	route: "editor",
		// 	component: "/components/editor/index.tsx",
		// },
		{
			id: "2501920741714350",
			parentId: "2271615060673773",
			label: "sys.nav.i18n",
			name: "Multi Language",
			type: PermissionType.MENU,
			route: "i18n",
			component: "/components/multi-language/index.tsx",
		},
		{
			id: "2013577074467956",
			parentId: "2271615060673773",
			label: "sys.nav.upload",
			name: "upload",
			type: PermissionType.MENU,
			route: "Upload",
			component: "/components/upload/index.tsx",
		},
		{
			id: "7749726274771764",
			parentId: "2271615060673773",
			label: "sys.nav.chart",
			name: "Chart",
			type: PermissionType.MENU,
			route: "chart",
			component: "/components/chart/index.tsx",
		},
		{
			id: "2013577074467957",
			parentId: "2271615060673773",
			label: "sys.nav.toast",
			name: "Toast",
			type: PermissionType.MENU,
			route: "toast",
			component: "/components/toast/index.tsx",
		},
	],
};
const FUNCTIONS_PERMISSION = {
	id: "8132044808088488",
	parentId: "",
	label: "sys.nav.functions",
	name: "functions",
	icon: "solar:plain-2-bold-duotone",
	type: PermissionType.CATALOGUE,
	route: "functions",
	order: 4,
	children: [
		{
			id: "3667930780705750",
			parentId: "8132044808088488",
			label: "sys.nav.clipboard",
			name: "Clipboard",
			type: PermissionType.MENU,
			route: "clipboard",
			component: "/functions/clipboard/index.tsx",
		},
		{
			id: "3667930780705751",
			parentId: "8132044808088488",
			label: "sys.nav.token_expired",
			name: "Token Expired",
			type: PermissionType.MENU,
			route: "token-expired",
			component: "/functions/token-expired/index.tsx",
		},
	],
};
const MENU_LEVEL_PERMISSION = {
	id: "0194818428516575",
	parentId: "",
	label: "sys.nav.menulevel.index",
	name: "Menu Level",
	icon: "local:ic-menulevel",
	type: PermissionType.CATALOGUE,
	route: "menu-level",
	order: 5,
	children: [
		{
			id: "0144431332471389",
			parentId: "0194818428516575",
			label: "sys.nav.menulevel.1a",
			name: "Menu Level 1a",
			type: PermissionType.MENU,
			route: "menu-level-1a",
			component: "/menu-level/menu-level-1a/index.tsx",
		},
		{
			id: "7572529636800586",
			parentId: "0194818428516575",
			label: "sys.nav.menulevel.1b.index",
			name: "Menu Level 1b",
			type: PermissionType.CATALOGUE,
			route: "menu-level-1b",
			children: [
				{
					id: "3653745576583237",
					parentId: "7572529636800586",
					label: "sys.nav.menulevel.1b.2a",
					name: "Menu Level 2a",
					type: PermissionType.MENU,
					route: "menu-level-2a",
					component: "/menu-level/menu-level-1b/menu-level-2a/index.tsx",
				},
				{
					id: "4873136353891364",
					parentId: "7572529636800586",
					label: "sys.nav.menulevel.1b.2b.index",
					name: "Menu Level 2b",
					type: PermissionType.CATALOGUE,
					route: "menu-level-2b",
					children: [
						{
							id: "4233029726998055",
							parentId: "4873136353891364",
							label: "sys.nav.menulevel.1b.2b.3a",
							name: "Menu Level 3a",
							type: PermissionType.MENU,
							route: "menu-level-3a",
							component: "/menu-level/menu-level-1b/menu-level-2b/menu-level-3a/index.tsx",
						},
						{
							id: "3298034742548454",
							parentId: "4873136353891364",
							label: "sys.nav.menulevel.1b.2b.3b",
							name: "Menu Level 3b",
							type: PermissionType.MENU,
							route: "menu-level-3b",
							component: "/menu-level/menu-level-1b/menu-level-2b/menu-level-3b/index.tsx",
						},
					],
				},
			],
		},
	],
};
const ERRORS_PERMISSION = {
	id: "9406067785553476",
	parentId: "",
	label: "sys.nav.error.index",
	name: "Error",
	icon: "bxs:error-alt",
	type: PermissionType.CATALOGUE,
	route: "error",
	order: 6,
	children: [
		{
			id: "8557056851997154",
			parentId: "9406067785553476",
			label: "sys.nav.error.403",
			name: "403",
			type: PermissionType.MENU,
			route: "403",
			component: "/sys/error/Page403.tsx",
		},
		{
			id: "5095669208159005",
			parentId: "9406067785553476",
			label: "sys.nav.error.404",
			name: "404",
			type: PermissionType.MENU,
			route: "404",
			component: "/sys/error/Page404.tsx",
		},
		{
			id: "0225992135973772",
			parentId: "9406067785553476",
			label: "sys.nav.error.500",
			name: "500",
			type: PermissionType.MENU,
			route: "500",
			component: "/sys/error/Page500.tsx",
		},
	],
};
const OTHERS_PERMISSION = [
	{
		id: "3981225257359246",
		parentId: "",
		label: "sys.nav.calendar",
		name: "Calendar",
		icon: "solar:calendar-bold-duotone",
		type: PermissionType.MENU,
		route: "calendar",
		component: "/sys/others/calendar/index.tsx",
	},
	{
		id: "3513985683886393",
		parentId: "",
		label: "sys.nav.kanban",
		name: "kanban",
		icon: "solar:clipboard-bold-duotone",
		type: PermissionType.MENU,
		route: "kanban",
		component: "/sys/others/kanban/index.tsx",
	},
	{
		id: "5455837930804461",
		parentId: "",
		label: "sys.nav.disabled",
		name: "Disabled",
		icon: "local:ic-disabled",
		type: PermissionType.MENU,
		route: "disabled",
		status: BasicStatus.DISABLE,
		component: "/sys/others/calendar/index.tsx",
	},
	{
		id: "7728048658221587",
		parentId: "",
		label: "sys.nav.label",
		name: "Label",
		icon: "local:ic-label",
		type: PermissionType.MENU,
		route: "label",
		newFeature: true,
		component: "/sys/others/blank.tsx",
	},
	{
		id: "5733704222120995",
		parentId: "",
		label: "sys.nav.frame",
		name: "Frame",
		icon: "local:ic-external",
		type: PermissionType.CATALOGUE,
		route: "frame",
		children: [
			{
				id: "9884486809510480",
				parentId: "5733704222120995",
				label: "sys.nav.external_link",
				name: "External Link",
				type: PermissionType.MENU,
				route: "external_link",
				hideTab: true,
				component: "/sys/others/iframe/external-link.tsx",
				frameSrc: "https://ant.design/",
			},
			{
				id: "9299640886731819",
				parentId: "5733704222120995",
				label: "sys.nav.iframe",
				name: "Iframe",
				type: PermissionType.MENU,
				route: "frame",
				component: "/sys/others/iframe/index.tsx",
				frameSrc: "https://ant.design/",
			},
		],
	},
	{
		id: "0941594969900756",
		parentId: "",
		label: "sys.nav.blank",
		name: "Disabled",
		icon: "local:ic-blank",
		type: PermissionType.MENU,
		route: "blank",
		component: "/sys/others/blank.tsx",
	},
];

export const PERMISSION_LIST = [
	DASHBOARD_PERMISSION,
	MANAGEMENT_PERMISSION,
	COMPONENTS_PERMISSION,
	FUNCTIONS_PERMISSION,
	MENU_LEVEL_PERMISSION,
	ERRORS_PERMISSION,
	...OTHERS_PERMISSION,
];

/**
 * User permission mock
 */
const USER_MANAGEMENT_PERMISSIONS = [
	{
		id: "1",
		name: "用户管理读取",
		code: "user-management:read",
		resource: "user-management",
		action: "read",
		type: PermissionType.ACTION,
	},
	{
		id: "2",
		name: "用户管理创建",
		code: "user-management:create",
		resource: "user-management",
		action: "create",
		type: PermissionType.ACTION,
	},
	{
		id: "3",
		name: "用户管理更新",
		code: "user-management:update",
		resource: "user-management",
		action: "update",
		type: PermissionType.ACTION,
	},
	{
		id: "4",
		name: "用户管理删除",
		code: "user-management:delete",
		resource: "user-management",
		action: "delete",
		type: PermissionType.ACTION,
	},
];

const ROLE_MANAGEMENT_PERMISSIONS = [
	{
		id: "5",
		name: "角色管理读取",
		code: "role-management:read",
		resource: "role-management",
		action: "read",
		type: PermissionType.ACTION,
	},
	{
		id: "6",
		name: "角色管理创建",
		code: "role-management:create",
		resource: "role-management",
		action: "create",
		type: PermissionType.ACTION,
	},
	{
		id: "7",
		name: "角色管理更新",
		code: "role-management:update",
		resource: "role-management",
		action: "update",
		type: PermissionType.ACTION,
	},
	{
		id: "8",
		name: "角色管理删除",
		code: "role-management:delete",
		resource: "role-management",
		action: "delete",
		type: PermissionType.ACTION,
	},
];

const SYSTEM_SETTINGS_PERMISSIONS = [
	{
		id: "9",
		name: "系统设置读取",
		code: "system-settings:read",
		resource: "system-settings",
		action: "read",
		type: PermissionType.ACTION,
	},
	{
		id: "10",
		name: "系统设置更新",
		code: "system-settings:update",
		resource: "system-settings",
		action: "update",
		type: PermissionType.ACTION,
	},
];

const DATA_ANALYSIS_PERMISSIONS = [
	{
		id: "11",
		name: "数据分析读取",
		code: "data-analysis:read",
		resource: "data-analysis",
		action: "read",
		type: PermissionType.ACTION,
	},
];

const ALL_PERMISSIONS = [
	...USER_MANAGEMENT_PERMISSIONS,
	...ROLE_MANAGEMENT_PERMISSIONS,
	...SYSTEM_SETTINGS_PERMISSIONS,
	...DATA_ANALYSIS_PERMISSIONS,
];

/**
 * User role mock
 */
const SUPER_ADMIN_ROLE = {
	id: "4281707933534332",
	name: "超级管理员",
	code: "super-admin",
	label: "super-admin",
	status: BasicStatus.ENABLE,
	order: 1,
	desc: "超级管理员，拥有所有权限",
	isSuperAdmin: true,
	permissions: ALL_PERMISSIONS,
};

const ADMIN_ROLE = {
	id: "9931665660771476",
	name: "管理员",
	code: "admin",
	label: "admin",
	status: BasicStatus.ENABLE,
	order: 2,
	desc: "管理员，拥有部分权限",
	permissions: [...USER_MANAGEMENT_PERMISSIONS, ...ROLE_MANAGEMENT_PERMISSIONS, ...DATA_ANALYSIS_PERMISSIONS],
};

const EDITOR_ROLE = {
	id: "1234567890123456",
	name: "编辑",
	code: "editor",
	label: "editor",
	status: BasicStatus.ENABLE,
	order: 3,
	desc: "编辑，拥有编辑权限",
	permissions: [
		USER_MANAGEMENT_PERMISSIONS[0], // 只读
		DATA_ANALYSIS_PERMISSIONS[0], // 只读
	],
};

const VISITOR_ROLE = {
	id: "7890123456789012",
	name: "访客",
	code: "visitor",
	label: "visitor",
	status: BasicStatus.ENABLE,
	order: 4,
	desc: "访客，只能查看",
	permissions: [
		USER_MANAGEMENT_PERMISSIONS[0], // 只读
	],
};
export const ROLE_LIST = [SUPER_ADMIN_ROLE, ADMIN_ROLE, EDITOR_ROLE, VISITOR_ROLE];

/**
 * User data mock
 */
export const DEFAULT_USER = {
	id: "b34719e1-ce46-457e-9575-99505ecee828",
	username: "admin",
	email: "admin@slash.com",
	avatar: faker.image.avatarGitHub(),
	createdAt: faker.date.anytime(),
	updatedAt: faker.date.recent(),
	password: "demo1234",
	roles: [SUPER_ADMIN_ROLE],
	permissions: SUPER_ADMIN_ROLE.permissions,
};
export const ADMIN_USER = {
	id: "efaa20ea-4dc5-47ee-a200-8a899be29494",
	username: "administrator",
	password: "demo1234",
	email: "administrator@slash.com",
	avatar: faker.image.avatarGitHub(),
	createdAt: faker.date.anytime(),
	updatedAt: faker.date.recent(),
	roles: [ADMIN_ROLE],
	permissions: ADMIN_ROLE.permissions,
};
export const EDITOR_USER = {
	id: "1234567890123456",
	username: "editor",
	password: "demo1234",
	email: "editor@slash.com",
	avatar: faker.image.avatarGitHub(),
	createdAt: faker.date.anytime(),
	updatedAt: faker.date.recent(),
	roles: [EDITOR_ROLE],
	permissions: EDITOR_ROLE.permissions,
};
export const VISITOR_USER = {
	id: "7890123456789012",
	username: "visitor",
	password: "demo1234",
	email: "visitor@slash.com",
	avatar: faker.image.avatarGitHub(),
	createdAt: faker.date.anytime(),
	updatedAt: faker.date.recent(),
	roles: [VISITOR_ROLE],
	permissions: VISITOR_ROLE.permissions,
};
export const USER_LIST = [DEFAULT_USER, ADMIN_USER, EDITOR_USER, VISITOR_USER];

// * Hot update, updating user permissions, only effective in the development environment
if (import.meta.hot) {
	import.meta.hot.accept((newModule) => {
		if (!newModule) return;

		const { DEFAULT_USER, ADMIN_USER, EDITOR_USER, VISITOR_USER } = newModule;

		const {
			userInfo,
			actions: { setUserInfo },
		} = useUserStore.getState();

		if (!userInfo?.username) return;

		let newUserInfo: typeof DEFAULT_USER | typeof ADMIN_USER | typeof EDITOR_USER | typeof VISITOR_USER;
		switch (userInfo.username) {
			case DEFAULT_USER.username:
				newUserInfo = DEFAULT_USER;
				break;
			case ADMIN_USER.username:
				newUserInfo = ADMIN_USER;
				break;
			case EDITOR_USER.username:
				newUserInfo = EDITOR_USER;
				break;
			case VISITOR_USER.username:
				newUserInfo = VISITOR_USER;
				break;
			default:
				return;
		}

		setUserInfo(newUserInfo);

		console.log("[HMR] User permissions updated:", {
			username: newUserInfo.username,
			permissions: newUserInfo.permissions,
		});
	});
}
