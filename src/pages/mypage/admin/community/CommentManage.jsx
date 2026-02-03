import { useMemo, useState, useCallback } from "react";
import BaseTable, {
	getSelectColumn,
} from "../../../../components/table/BaseTable";
import BaseButton from "../../../../components/button/BaseButton";
import S from "./style";

const SORT_OPTIONS = [
	{ id: "latest", label: "최신순" },
	{ id: "likes", label: "좋아요순" },
	{ id: "replies", label: "답글순" },
];

const SELECTION_ACTIONS = [
	{ value: "delete", label: "삭제", icon: "", color: "error" },
	{ value: "hide", label: "숨김", icon: "" },
];

// 샘플 데이터
const SAMPLE_COMMENTS = [
	{
		id: 1,
		author: "오소리",
		createdAt: "2026-01-01 13:50",
		content: "가격 얼마였나용???",
	},
	{
		id: 2,
		author: "고양이",
		createdAt: "2026-01-09 00:22",
		content: "반갑습니다! 집이 근처이신가요??",
	},
	{
		id: 3,
		author: "오리너구리",
		createdAt: "2026-01-22 04:23",
		content: "슈붕이 진리 이러고 있네 님이랑 아무도 겉상 안 함 ㅅ ㄱ",
	},
	{
		id: 4,
		author: "강아지",
		createdAt: "2026-01-31 10:41",
		content: "팥붕 따위보다 슈붕이 진리",
	},
	{
		id: 5,
		author: "도롱뇽",
		createdAt: "2026-02-02 16:55",
		content: "여기 바로 주변에는 없고 저 장한평역 쪽 가시면 두쯔쿠 맛집 있어어",
	},
	{
		id: 6,
		author: "하늘다람쥐",
		createdAt: "2026-02-11 15:30",
		content: "정확한 위치 알 수 있을까요?",
	},
	{
		id: 7,
		author: "햄스터",
		createdAt: "2026-02-18 12:24",
		content: "거기 과잉진료 쩔어요.... 절대 가지 마세요..ㅜㅜ",
	},
	{
		id: 8,
		author: "호랑이",
		createdAt: "2026-02-25 19:25",
		content: "이따 7시 30분에 술 한 잔 하실 분 연락주세요",
	},
];

const CommentManage = () => {
	const [currentSort, setCurrentSort] = useState("latest");
	const [selectedRows, setSelectedRows] = useState([]);
	const data = SAMPLE_COMMENTS;

	const sortedData = useMemo(() => {
		const result = [...data];

		switch (currentSort) {
			case "likes":
				return result.sort((a, b) => (b.likes || 0) - (a.likes || 0));
			case "replies":
				return result.sort((a, b) => (b.replies || 0) - (a.replies || 0));
			case "latest":
			default:
				return result.sort(
					(a, b) => new Date(b.createdAt) - new Date(a.createdAt),
				);
		}
	}, [data, currentSort]);

	const handleSelectionAction = useCallback(
		(action) => {
			const ids = selectedRows.map((row) => row.id);
			console.log(`Action: ${action}, Comment IDs:`, ids);
			// TODO: API call
			setSelectedRows([]);
		},
		[selectedRows],
	);

	const columns = useMemo(
		() => [
			{
				accessorKey: "author",
				header: "작성자",
				enableSorting: false,
			},
			{
				accessorKey: "createdAt",
				header: "작성일시",
				enableSorting: true,
			},
			{
				accessorKey: "content",
				header: "내용",
				cell: ({ getValue }) => (
					<S.CommentContent>{getValue()}</S.CommentContent>
				),
				enableSorting: false,
			},
			getSelectColumn(),
		],
		[],
	);

	return (
		<div>
			<S.SortButtonGroup>
				{SORT_OPTIONS.map((option) => (
					<BaseButton
						key={option.id}
						shape="pill"
						size="linktxt"
						padding="smallMedium"
						variant={currentSort === option.id ? "solid" : "outline"}
						backgroundColor={currentSort === option.id ? "primary" : "white"}
						color={currentSort === option.id ? "white" : "gray05"}
						border={currentSort === option.id ? "none" : "gray04"}
						onClick={() => setCurrentSort(option.id)}
					>
						{option.label}
					</BaseButton>
				))}
			</S.SortButtonGroup>

			<BaseTable
				data={sortedData}
				columns={columns}
				enableRowSelection={true}
				selectionActions={SELECTION_ACTIONS}
				onSelectionAction={handleSelectionAction}
				enableSorting={true}
				enableFiltering={true}
				enablePagination={true}
				pageSize={10}
				onRowSelectionChange={setSelectedRows}
			/>
		</div>
	);
};

export default CommentManage;
