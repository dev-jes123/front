// 정보제공
// 서버 데이터 받아서 Card랑 ProvideDetail에서 쓰는 형태로 변환
import { categoryImage } from "../mock/mockPosts";

export const mapApiPostToPost = (apiPost) => {
  const category = apiPost.category ?? apiPost.categoryName ?? "기타";

  return {
    id: apiPost.id ?? apiPost.postId,
    category,
    title: apiPost.title ?? apiPost.subject ?? "",
    createdAt: apiPost.createdAt ?? apiPost.created_at ?? "",
    contentHtml:
      apiPost.contentHtml ??
      apiPost.content_html ??
      apiPost.content ??
      "",
    likeCount: apiPost.likeCount ?? apiPost.likes ?? 0,
    bookmarkCount: apiPost.bookmarkCount ?? apiPost.bookmarks ?? 0,
    imageSrc:
      apiPost.imageSrc ??
      categoryImage[category] ??
      categoryImage["기타"],
  };
};