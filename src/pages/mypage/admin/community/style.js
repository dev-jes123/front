import styled from "styled-components";

const S = {};

S.PageContainer = styled.div`
	padding: 0;
`;

S.TabContainer = styled.nav`
	display: flex;
	gap: 24px;
	border-bottom: 1px solid #e6e8ec;
	margin-bottom: 32px;
`;

S.TabButton = styled.button`
	padding: 10px 2px;
	border: none;
	background: none;
	cursor: pointer;
	font-size: 18px;
	font-weight: 600;
	font-family: inherit;
	min-width: 100px;
	color: ${({ $active }) => ($active ? "#2563EB" : "#B5B5B5")};
	border-bottom: ${({ $active }) =>
		$active ? "2.5px solid #2563EB" : "2px solid transparent"};
`;

S.ContentSection = styled.div`
	margin-top: 10px;
`;

S.HeaderRow = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 16px;
`;

S.TitleWithFilter = styled.div`
	display: flex;
	align-items: center;
	gap: 16px;
`;

S.SectionTitle = styled.h2`
	font-size: ${({ theme }) => theme.FONT_SIZE.h4};
	font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
	color: ${({ theme }) => theme.PALLETE.black};
	margin: 0;
`;

S.RegionFilter = styled.div`
	display: flex;
	align-items: center;
	gap: 6px;
	padding: 8px 16px;
	background: ${({ theme }) => theme.PALLETE.gray.greyscale01};
	border-radius: 20px;
	font-size: ${({ theme }) => theme.FONT_SIZE.linktxt};
	color: ${({ theme }) => theme.PALLETE.gray.greyscale05};
	cursor: pointer;

	svg {
		width: 16px;
		height: 16px;
		color: ${({ theme }) => theme.PALLETE.gray.greyscale04};
	}

	span {
		color: ${({ theme }) => theme.PALLETE.primary};
		font-weight: ${({ theme }) => theme.FONT_WEIGHT.medium};
	}
`;

S.SortButtonGroup = styled.div`
	display: flex;
	gap: 4px;
	margin-bottom: 16px;
`;

S.EngagementStats = styled.div`
	display: flex;
	align-items: center;
	gap: 12px;
	font-size: ${({ theme }) => theme.FONT_SIZE.h7};
	color: ${({ theme }) => theme.PALLETE.gray.greyscale04};
	margin-top: 4px;
`;

S.StatItem = styled.span`
	display: flex;
	align-items: center;
	gap: 4px;

	svg {
		width: 14px;
		height: 14px;
	}
`;

S.TitleCell = styled.div`
	text-align: left;
`;

S.PostTitle = styled.div`
	font-size: ${({ theme }) => theme.FONT_SIZE.linktxt};
	color: ${({ theme }) => theme.PALLETE.gray.greyscale05};
	margin-bottom: 4px;
`;

S.CommentContent = styled.div`
	text-align: left;
	font-size: ${({ theme }) => theme.FONT_SIZE.linktxt};
	color: ${({ theme }) => theme.PALLETE.gray.greyscale05};
	max-width: 400px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;

export default S;
