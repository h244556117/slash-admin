import { USER_LIST } from "@/_mock/assets";
import { Icon } from "@/components/icon";
import { usePathname, useRouter } from "@/routes/hooks";
import { Badge } from "@/ui/badge";
import { Button } from "@/ui/button";
import { Card, CardContent, CardHeader } from "@/ui/card";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import type { UserInfo } from "#/entity";
import { BasicStatus, PermissionAction, PermissionResource } from "#/enum";
import ExportButton from "@/components/export/ExportButton";
import { PermissionGuard } from "@/components/auth/permission-guard";

const USERS: UserInfo[] = USER_LIST;

export default function UserPage() {
	const { push } = useRouter();
	const pathname = usePathname();

	const columns: ColumnsType<UserInfo> = [
		{
			title: "Name",
			dataIndex: "name",
			width: 300,
			render: (_, record) => {
				return (
					<div className="flex">
						<img alt="" src={record.avatar} className="h-10 w-10 rounded-full" />
						<div className="ml-2 flex flex-col">
							<span className="text-sm">{record.username}</span>
							<span className="text-xs text-text-secondary">{record.email}</span>
						</div>
					</div>
				);
			},
		},
		{
			title: "Role",
			dataIndex: "roles",
			align: "center",
			width: 120,
			render: (roles: UserInfo["roles"]) => (
				<div className="flex flex-col space-y-1">
					{roles?.map((role) => (
						<Badge key={role.id} variant="info">
							{role.name}
						</Badge>
					))}
				</div>
			),
		},
		{
			title: "Status",
			dataIndex: "status",
			align: "center",
			width: 120,
			render: (status) => (
				<Badge variant={status === BasicStatus.DISABLE ? "error" : "success"}>
					{status === BasicStatus.DISABLE ? "Disable" : "Enable"}
				</Badge>
			),
		},
		{
			title: "Action",
			key: "operation",
			align: "center",
			width: 150,
			render: (_, record) => (
				<div className="flex w-full justify-center space-x-2">
					<PermissionGuard resource={PermissionResource.USER_MANAGEMENT} action={PermissionAction.READ}>
						<Button
							variant="ghost"
							size="icon"
							onClick={() => {
								push(`${pathname}/${record.id}`);
							}}
						>
							<Icon icon="mdi:card-account-details" size={18} />
						</Button>
					</PermissionGuard>

					<PermissionGuard resource={PermissionResource.USER_MANAGEMENT} action={PermissionAction.UPDATE}>
						<Button variant="ghost" size="icon" onClick={() => {}}>
							<Icon icon="solar:pen-bold-duotone" size={18} />
						</Button>
					</PermissionGuard>

					<PermissionGuard resource={PermissionResource.USER_MANAGEMENT} action={PermissionAction.DELETE}>
						<Button variant="ghost" size="icon">
							<Icon icon="mingcute:delete-2-fill" size={18} className="text-error!" />
						</Button>
					</PermissionGuard>
				</div>
			),
		},
	];

	return (
		<Card>
			<CardHeader>
				<div className="flex items-center justify-between">
					<div>User List</div>
					<div className="flex gap-2">
						<ExportButton data={USERS} fileName="user_list" dataType="用户数据" />
						<PermissionGuard resource={PermissionResource.USER_MANAGEMENT} action={PermissionAction.CREATE}>
							<Button onClick={() => {}}>New</Button>
						</PermissionGuard>
					</div>
				</div>
			</CardHeader>
			<CardContent>
				<Table
					rowKey="id"
					size="small"
					scroll={{ x: "max-content" }}
					pagination={false}
					columns={columns}
					dataSource={USERS}
				/>
			</CardContent>
		</Card>
	);
}
