export const fetchProvidePosts = async ({ page = 1, pageSize = 16 } = {}) => {
  // 나중에 서버 연결하면 풀기
  // const response = await fetch(`/api/provide/posts?page=${page}&pageSize=${pageSize}`);
  // if (!response.ok) throw new Error("Failed to fetch posts");
  // return response.json();
  return [];
};

// 게시글 상세 조회
export const fetchProvidePostDetail = async ({ id }) => {
  // 나중에 서버 연결하면 풀기
  // const response = await fetch(`/api/provide/${id}`);
  // if (!response.ok) throw new Error("Failed to fetch post detail");
  // return response.json();

  // 지금은 더미
  return null;
};
