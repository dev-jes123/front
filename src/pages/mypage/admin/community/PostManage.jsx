import { useMemo, useState, useCallback } from "react";
import BaseTable, {
	getSelectColumn,
} from "../../../../components/table/BaseTable";
import BaseButton from "../../../../components/button/BaseButton";
import S from "./style";

const SORT_OPTIONS = [
	{ id: "latest", label: "최신순" },
	{ id: "views", label: "조회수순" },
	{ id: "scraps", label: "스크랩순" },
	{ id: "likes", label: "좋아요순" },
	{ id: "comments", label: "댓글순" },
];

const SELECTION_ACTIONS = [
	{ value: "delete", label: "삭제", icon: "", color: "error" },
	{ value: "hide", label: "숨김", icon: "" },
];

// 샘플 데이터
const SAMPLE_POSTS = [
	{
		id: 1,
		author: "오소리",
		createdAt: "2026-01-01 13:50",
		title: "역삼 친구 모여라",
		likes: 2,
		comments: 2,
		views: 30,
		shares: 7,
	},
	{
		id: 2,
		author: "고양이",
		createdAt: "2026-01-09 00:22",
		title: "단수 문제 질문",
		likes: 2,
		comments: 2,
		views: 30,
		shares: 7,
	},
	{
		id: 3,
		author: "오리너구리",
		createdAt: "2026-01-22 04:23",
		title: "붕어빵 먹고 싶어요",
		likes: 2,
		comments: 2,
		views: 30,
		shares: 7,
	},
	{
		id: 4,
		author: "강아지",
		createdAt: "2026-01-31 10:41",
		title: "○○동 빌라 조용히",
		likes: 2,
		comments: 2,
		views: 30,
		shares: 7,
	},
	{
		id: 5,
		author: "도롱뇽",
		createdAt: "2026-02-02 16:55",
		title: "이상한 아저씨 있는",
		likes: 2,
		comments: 2,
		views: 30,
		shares: 7,
	},
	{
		id: 6,
		author: "하늘다람쥐",
		createdAt: "2026-02-11 15:30",
		title: "아랫집 열 받는다",
		likes: 2,
		comments: 2,
		views: 30,
		shares: 7,
	},
	{
		id: 7,
		author: "햄스터",
		createdAt: "2026-02-18 12:24",
		title: "계약금 환불 어떻게",
		likes: 2,
		comments: 2,
		views: 30,
		shares: 7,
	},
	{
		id: 8,
		author: "호랑이",
		createdAt: "2026-02-25 19:25",
		title: "이사 지원 받아본 분",
		likes: 2,
		comments: 2,
		views: 30,
		shares: 7,
	},
];

const HeartIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
	>
		<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
	</svg>
);

const CommentIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
	>
		<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
	</svg>
);

const EyeIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
	>
		<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
		<circle cx="12" cy="12" r="3" />
	</svg>
);

const ShareIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
	>
		<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
		<polyline points="16 6 12 2 8 6" />
		<line x1="12" y1="2" x2="12" y2="15" />
	</svg>
);

const PostManage = () => {
	const [currentSort, setCurrentSort] = useState("latest");
	const [selectedRows, setSelectedRows] = useState([]);
	const data = SAMPLE_POSTS;

	const sortedData = useMemo(() => {
		const result = [...data];

		switch (currentSort) {
			case "views":
				return result.sort((a, b) => b.views - a.views);
			case "scraps":
				return result.sort((a, b) => b.shares - a.shares);
			case "likes":
				return result.sort((a, b) => b.likes - a.likes);
			case "comments":
				return result.sort((a, b) => b.comments - a.comments);
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
			console.log(`Action: ${action}, Post IDs:`, ids);
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
				accessorKey: "title",
				header: "제목",
				cell: ({ row }) => {
					const post = row.original;
					return (
						<S.TitleCell>
							<S.PostTitle>{post.title}</S.PostTitle>
							<S.EngagementStats>
								<S.StatItem>
									<HeartIcon /> {post.likes}
								</S.StatItem>
								<S.StatItem>
									<CommentIcon /> {post.comments}
								</S.StatItem>
								<S.StatItem>
									<EyeIcon /> {post.views}
								</S.StatItem>
								<S.StatItem>
									<ShareIcon /> {post.shares}
								</S.StatItem>
							</S.EngagementStats>
						</S.TitleCell>
					);
				},
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

export default PostManage;
