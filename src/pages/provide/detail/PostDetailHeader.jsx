import React from "react";
import S from "./style";

const PostDetailHeader = ({ category, title, createdAt, likeCount = 0, bookmarkCount = 0 }) => {
  return (
    <S.PostHeader>
      <S.PostTitle>
        <S.Category>{category}</S.Category>
        <S.Title>{title}</S.Title>
        <S.Date>{createdAt}</S.Date>
      </S.PostTitle>

      <S.LikeAndScrap>
        <S.CountItems>
          <S.Icon src="/assets/images/icons/like.png" alt="좋아요" />
          <S.Count>{likeCount}</S.Count>
        </S.CountItems>
        <S.CountItems>
          <S.Icon src="/assets/images/icons/bookmark.png" alt="북마크" />
          <S.Count>{bookmarkCount}</S.Count>
        </S.CountItems>
      </S.LikeAndScrap>
    </S.PostHeader>
  );
};

export default PostDetailHeader;