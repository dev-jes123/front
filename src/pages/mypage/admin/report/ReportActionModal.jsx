import React, { useState } from "react";
import S from "../../../../components/modals/style";

const ACTION_OPTIONS = [
	{ value: "pending", label: "미처리" },
	{ value: "tempBan", label: "임시 차단" },
	{ value: "permBan", label: "영구 차단" },
	{ value: "noAction", label: "제재하지 않음" },
];

const ReportActionModal = ({ isOpen, report, onClose, onConfirm }) => {
	const [action, setAction] = useState("permBan");
	const [notifyReporter, setNotifyReporter] = useState(false);
	const [applyToAll, setApplyToAll] = useState(false);
	const [reason, setReason] = useState("");

	if (!isOpen || !report) return null;

	const handleConfirm = () => {
		onConfirm?.({
			reportId: report.id,
			action,
			notifyReporter,
			applyToAll,
			reason,
		});
		setAction("permBan");
		setNotifyReporter(false);
		setApplyToAll(false);
		setReason("");
	};

	const handleClose = () => {
		setAction("permBan");
		setNotifyReporter(false);
		setApplyToAll(false);
		setReason("");
		onClose?.();
	};

	return (
		<S.ModalOverlay onClick={handleClose}>
			<S.ModalContainer onClick={(e) => e.stopPropagation()}>
				<S.CloseButton type="button" onClick={handleClose}>
					×
				</S.CloseButton>
				<S.Title>신고 처리</S.Title>
				<S.Subtitle>신고 내용을 확인하고 적절한 조치를 선택해주세요.</S.Subtitle>

				<S.InfoCard>
					<S.InfoRow>
						<S.InfoLabel>신고 대상</S.InfoLabel>
						<S.InfoValue>
							{report.reportedUser?.nickname} ({report.reportedUser?.email})
						</S.InfoValue>
					</S.InfoRow>
					<S.InfoRow>
						<S.InfoLabel>신고 사유</S.InfoLabel>
						<S.InfoValue>{report.reason}</S.InfoValue>
					</S.InfoRow>
				</S.InfoCard>

				<S.Section>
					<S.Label>처리 방법</S.Label>
					<S.Select value={action} onChange={(e) => setAction(e.target.value)}>
						{ACTION_OPTIONS.map((option) => (
							<option key={option.value} value={option.value}>
								{option.label}
							</option>
						))}
					</S.Select>
				</S.Section>

				<S.Section>
					<S.CheckboxRow>
						<S.Checkbox
							type="checkbox"
							checked={notifyReporter}
							onChange={(e) => setNotifyReporter(e.target.checked)}
						/>
						신고자에게 처리 결과 알림 전송
					</S.CheckboxRow>
					<S.CheckboxRow>
						<S.Checkbox
							type="checkbox"
							checked={applyToAll}
							onChange={(e) => setApplyToAll(e.target.checked)}
						/>
						동일 대상의 모든 신고에 일괄 적용
					</S.CheckboxRow>
				</S.Section>

				<S.Section>
					<S.Label>차단 사유</S.Label>
					<S.Textarea
						value={reason}
						onChange={(e) => setReason(e.target.value)}
						placeholder="입력된 내용은 사용자 이메일로 전송됩니다."
						rows={4}
					/>
				</S.Section>

				<S.ButtonRow>
					<S.SecondaryButton type="button" onClick={handleClose}>
						취소
					</S.SecondaryButton>
					<S.ConfirmButton type="button" onClick={handleConfirm}>
						확인
					</S.ConfirmButton>
				</S.ButtonRow>
			</S.ModalContainer>
		</S.ModalOverlay>
	);
};

export default ReportActionModal;
