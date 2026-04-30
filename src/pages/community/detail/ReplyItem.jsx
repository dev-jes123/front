import React, { useState } from "react";
import S from "./style";
import ReportModal from "./ReportModal";

const ReplyItem = ({ reply }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(reply.likeCount || 0);
  const [isReportOpen, setIsReportOpen] = useState(false);
  const handleOpenReport = () => setIsReportOpen(true);
  const handleCloseReport = () => setIsReportOpen(false);

  const handleLike = () => {
    if (isLiked) {
      setIsLiked(false);
      setLikeCount((c) => Math.max(0, c - 1));
    } else {
      setIsLiked(true);
      setLikeCount((c) => c + 1);
    }
  };

  const likeIcon = isLiked
    ? "/assets/images/icons/like-active.png"
    : "/assets/images/icons/like.png";

  return (
    <>
      <S.ReplyItem>
        <S.ProfileBox>
          <S.ProfileImg src={reply.authorProfile} alt="프로필" />
        </S.ProfileBox>

        <S.CommentBubble>
          <S.CommentTop>
            <S.WritedCommentAuthor>{reply.author}</S.WritedCommentAuthor>

            <S.CommentRight>
              <S.CommentTime>
                <span>{reply.createdAt}</span>
                <S.CommentSirenIcon
                  src="/assets/images/icons/siren.png"
                  alt="신고"
                  onClick={handleOpenReport}
                  style={{ cursor: "pointer" }}
                />
              </S.CommentTime>

              <S.CommentIconGroup>
                <S.CommentIconButton type="button" onClick={handleLike}>
                  <S.CommentLikeIcon src={likeIcon} />
                  <S.CommentCountText>{likeCount}</S.CommentCountText>
                </S.CommentIconButton>
              </S.CommentIconGroup>
            </S.CommentRight>
          </S.CommentTop>

          <S.WritedCommentText>{reply.content}</S.WritedCommentText>
        </S.CommentBubble>
      </S.ReplyItem>
      {isReportOpen && (
        <ReportModal
          onClose={handleCloseReport}
          targetType="reply"
          targetId={reply.id}
          author={reply.author}
        />
      )}
    </>
  );
};

export default ReplyItem;
