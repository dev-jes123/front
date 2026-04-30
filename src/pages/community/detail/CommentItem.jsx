import React, { useEffect, useState } from "react";
import ReplyComposer from "./ReplyComposer";
import ReplyThread from "./ReplyThread";
import S from "./style";
import ReportModal from "./ReportModal";

const CommentItem = ({ comment }) => {
  const {
    id,
    author,
    authorProfile,
    content,
    createdAt,
    likeCount = 0,
    replyCount = 0,
    replies = [],
  } = comment;

  const [isOpen, setIsOpen] = useState(false);
  const [isReplyWriting, setIsReplyWriting] = useState(false);

  const [isLiked, setIsLiked] = useState(false);
  const [localLikeCount, setLocalLikeCount] = useState(likeCount);

  const [localReplies, setLocalReplies] = useState(replies);
  const [localReplyCount, setLocalReplyCount] = useState(replyCount);

  const [isReportOpen, setIsReportOpen] = useState(false);
  const handleOpenReport = () => setIsReportOpen(true);
  const handleCloseReport = () => setIsReportOpen(false);

  const hasReply =
    (localReplyCount ?? 0) > 0 || (localReplies?.length ?? 0) > 0;

  useEffect(() => {
    setIsLiked(false);
  }, [id]);

  useEffect(() => {
    if (!hasReply) setIsOpen(false);
  }, [hasReply]);

  const handleToggleLike = () => {
    if (isLiked) {
      setIsLiked(false);
      setLocalLikeCount((c) => Math.max(0, c - 1));
    } else {
      setIsLiked(true);
      setLocalLikeCount((c) => c + 1);
    }
  };

  const handleReplyClick = () => {
    if (!isOpen) {
      setIsOpen(true);
      setIsReplyWriting(true);
    } else {
      setIsReplyWriting((prev) => !prev);
    }
  };

  const handleToggleOpen = () => setIsOpen((prev) => !prev);

  const likeIcon = isLiked
    ? "/assets/images/icons/like-active.png"
    : "/assets/images/icons/like.png";

  return (
    <div>
      <S.CommentWrap>
        <S.ProfileBox>
          <S.ProfileImg src={authorProfile} alt={`${author} 프로필`} />
        </S.ProfileBox>

        <S.CommentBubble>
          <S.CommentTop>
            <S.WritedCommentAuthor>{author}</S.WritedCommentAuthor>

            <S.CommentRight>
              <S.CommentTime>
                <span>{createdAt}</span>
                <S.CommentSirenIcon
                  src="/assets/images/icons/siren.png"
                  alt="신고"
                  onClick={handleOpenReport}
                  style={{ cursor: "pointer" }}
                />
              </S.CommentTime>

              <S.CommentIconGroup>
                <S.CommentIconButton type="button" onClick={handleToggleLike}>
                  <S.CommentLikeIcon
                    className={isLiked ? "pop" : ""}
                    src={likeIcon}
                  />
                  <S.CommentCountText>{localLikeCount}</S.CommentCountText>
                </S.CommentIconButton>
                <S.CommentIconButton type="button" onClick={handleReplyClick}>
                  <S.CommentCountIcon
                    src="/assets/images/icons/comment.png"
                    alt="답글"
                  />
                  <S.CommentCountText>{localReplyCount}</S.CommentCountText>
                </S.CommentIconButton>

                {hasReply && (
                  <S.CommentIconButton type="button" onClick={handleToggleOpen}>
                    <S.ReplyOpenIcon
                      src="/assets/images/icons/down-arrow.png"
                      style={{
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    />
                  </S.CommentIconButton>
                )}
              </S.CommentIconGroup>
            </S.CommentRight>
          </S.CommentTop>

          <S.WritedCommentText>{content}</S.WritedCommentText>
        </S.CommentBubble>
      </S.CommentWrap>

      {isOpen && (
        <S.ReplySection>
          {isReplyWriting && (
            <ReplyComposer
              onSubmit={(content) => {
                const newReply = {
                  id: Date.now(),
                  author: "내 닉네임",
                  authorProfile: "/assets/images/icons/user-profile.png",
                  content,
                  createdAt: "방금 전",
                };

                setLocalReplies((prev) => [newReply, ...prev]);
                setLocalReplyCount((c) => c + 1);
                setIsReplyWriting(false);
              }}
            />
          )}

          <ReplyThread replies={localReplies} />
        </S.ReplySection>
      )}
      {isReportOpen && (
        <ReportModal
          onClose={handleCloseReport}
          targetType="comment"
          targetId={id}
          author={author}
        />
      )}
    </div>
  );
};

export default CommentItem;
