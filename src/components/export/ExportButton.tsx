import { DownloadOutlined, LoadingOutlined } from "@ant-design/icons";
import { Button, Dropdown, Menu, Modal, message, Progress } from "antd";
import type { DropdownProps } from "antd/es/dropdown";
import type { MenuProps } from "antd/es/menu";
import type { ModalProps } from "antd/es/modal";
import type { ProgressProps } from "antd/es/progress";
import Papa from "papaparse";
import type React from "react";
import { useState } from "react";
import * as XLSX from "xlsx";

interface ExportButtonProps {
	data: any[];
	fileName?: string;
	dataType?: string;
	onExportStart?: () => void;
	onExportComplete?: () => void;
	onExportError?: (error: Error) => void;
}

const ExportButton: React.FC<ExportButtonProps> = ({
	data,
	fileName,
	dataType = "data",
	onExportStart,
	onExportComplete,
	onExportError,
}) => {
	const [loading, setLoading] = useState(false);
	const [progress, setProgress] = useState(0);
	const [exporting, setExporting] = useState(false);
	const [cancelExport, setCancelExport] = useState(false);

	const generateFileName = (extension: string): string => {
		const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
		return `${fileName || `${dataType}_${timestamp}`}.${extension}`;
	};

	const exportToCSV = () => {
		if (!data || data.length === 0) {
			message.warning("没有数据可导出");
			return;
		}

		setLoading(true);
		setProgress(0);
		setExporting(true);
		setCancelExport(false);

		if (onExportStart) onExportStart();

		try {
			const csv = Papa.unparse(data);
			const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
			const url = URL.createObjectURL(blob);
			const link = document.createElement("a");
			link.href = url;
			link.setAttribute("download", generateFileName("csv"));
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);

			setLoading(false);
			setExporting(false);
			message.success("CSV 导出成功");
			if (onExportComplete) onExportComplete();
		} catch (error) {
			setLoading(false);
			setExporting(false);
			message.error("CSV 导出失败");
			if (onExportError) onExportError(error as Error);
		}
	};

	const exportToExcel = () => {
		if (!data || data.length === 0) {
			message.warning("没有数据可导出");
			return;
		}

		setLoading(true);
		setProgress(0);
		setExporting(true);
		setCancelExport(false);

		if (onExportStart) onExportStart();

		try {
			const worksheet = XLSX.utils.json_to_sheet(data);
			const workbook = XLSX.utils.book_new();
			XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
			XLSX.writeFile(workbook, generateFileName("xlsx"));

			setLoading(false);
			setExporting(false);
			message.success("Excel 导出成功");
			if (onExportComplete) onExportComplete();
		} catch (error) {
			setLoading(false);
			setExporting(false);
			message.error("Excel 导出失败");
			if (onExportError) onExportError(error as Error);
		}
	};

	const exportToJSON = () => {
		if (!data || data.length === 0) {
			message.warning("没有数据可导出");
			return;
		}

		setLoading(true);
		setProgress(0);
		setExporting(true);
		setCancelExport(false);

		if (onExportStart) onExportStart();

		try {
			const json = JSON.stringify(data, null, 2);
			const blob = new Blob([json], { type: "application/json;charset=utf-8;" });
			const url = URL.createObjectURL(blob);
			const link = document.createElement("a");
			link.href = url;
			link.setAttribute("download", generateFileName("json"));
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);

			setLoading(false);
			setExporting(false);
			message.success("JSON 导出成功");
			if (onExportComplete) onExportComplete();
		} catch (error) {
			setLoading(false);
			setExporting(false);
			message.error("JSON 导出失败");
			if (onExportError) onExportError(error as Error);
		}
	};

	const handleCancelExport = () => {
		setCancelExport(true);
		setLoading(false);
		setExporting(false);
		message.info("导出已取消");
		if (onExportComplete) onExportComplete();
	};

	const exportMenu: React.ReactNode = (
		<Menu>
			<Menu.Item key="csv" onClick={exportToCSV}>
				CSV 格式
			</Menu.Item>
			<Menu.Item key="excel" onClick={exportToExcel}>
				Excel 格式
			</Menu.Item>
			<Menu.Item key="json" onClick={exportToJSON}>
				JSON 格式
			</Menu.Item>
		</Menu>
	);

	return (
		<>
			<Dropdown<MenuProps> overlay={exportMenu} trigger={["click"]} disabled={loading}>
				<Button type="primary" icon={loading ? <LoadingOutlined spin /> : <DownloadOutlined />} disabled={loading}>
					导出数据
				</Button>
			</Dropdown>

			{exporting && (
				<Modal
					title="导出进度"
					open={exporting}
					onCancel={handleCancelExport}
					footer={null}
					closable={false}
					maskClosable={false}
				>
					<div style={{ textAlign: "center", padding: "20px 0" }}>
						<Progress<ProgressProps> percent={progress} status={cancelExport ? "exception" : "active"} />
						<p style={{ marginTop: "16px" }}>{cancelExport ? "导出已取消" : "正在导出，请稍候..."}</p>
					</div>
				</Modal>
			)}
		</>
	);
};

export default ExportButton;
