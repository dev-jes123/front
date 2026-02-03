import styled from "styled-components";

const S = {};

S.PendingNotice = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
	padding: 12px 16px;
	background: ${({ theme }) => theme.PALLETE.gray.greyscale01};
	border-radius: 8px;
	margin-bottom: 20px;
`;

S.PendingNoticeIcon = styled.span`
	font-size: ${({ theme }) => theme.FONT_SIZE.h5};
`;

S.PendingNoticeText = styled.span`
	font-size: ${({ theme }) => theme.FONT_SIZE.linktxt};
	color: ${({ theme }) => theme.PALLETE.gray.greyscale05};

	strong {
		color: ${({ theme }) => theme.PALLETE.primary};
		font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
	}
`;

S.FilterGroup = styled.div`
	display: flex;
	gap: 4px;
	margin-bottom: 16px;
`;

export default S;
