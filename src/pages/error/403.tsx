import { Button } from "@/ui/button";
import { Card, CardContent, CardHeader } from "@/ui/card";
import { useRouter } from "@/routes/hooks";
import { Icon } from "@/components/icon";

const Error403Page = () => {
	const router = useRouter();

	return (
		<div className="flex h-screen items-center justify-center bg-gray-50">
			<Card className="w-full max-w-md">
				<CardHeader>
					<div className="flex flex-col items-center justify-center">
						<Icon icon="mdi:shield-lock" size={48} className="text-red-500 mb-4" />
						<h1 className="text-2xl font-bold text-gray-800">403 Forbidden</h1>
						<p className="text-gray-500 mt-2">您没有权限访问此页面</p>
					</div>
				</CardHeader>
				<CardContent className="flex justify-center">
					<Button onClick={() => router.push("/dashboard")} className="mt-4">
						返回首页
					</Button>
				</CardContent>
			</Card>
		</div>
	);
};

export default Error403Page;
