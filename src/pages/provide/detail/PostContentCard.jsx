import React from "react";
import S from "./style";

const PostContentCard = ({ contentHtml }) => {
  return (
    <S.PostContainer>
      <S.TopLine />
      <S.PostContent dangerouslySetInnerHTML={{ __html: contentHtml }} />
      <S.BottomLine />
    </S.PostContainer>
  );
};

export default PostContentCard;