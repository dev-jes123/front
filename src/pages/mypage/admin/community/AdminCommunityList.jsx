import React, { useState } from "react";
import MyPageTitle from "../../general/component/MyPageTitle";
import MyPageTabMenu from "../../general/component/MyPageTabMenu";
import PostManage from "./PostManage";
import CommentManage from "./CommentManage";

const AdminCommunityList = () => {
	const [activeTab, setActiveTab] = useState("posts");

	const tabs = [
		{ id: "posts", label: "게시글 관리" },
		{ id: "comments", label: "댓글 관리" },
	];

	return (
		<div style={styles.page}>
			<MyPageTitle title="커뮤니티 관리" description="커뮤니티 콘텐츠를 관리하세요" />
			<MyPageTabMenu
				tabs={tabs}
				activeId={activeTab}
				onChange={setActiveTab}
			/>

			<div style={styles.content}>
				{activeTab === "posts" ? <PostManage /> : <CommentManage />}
			</div>
		</div>
	);
};

const styles = {
	page: {
		padding: "28px 32px 40px",
	},
	content: {
		marginTop: "10px",
	},
};

export default AdminCommunityList;
