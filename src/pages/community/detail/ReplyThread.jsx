import React from "react";
import ReplyItem from "./ReplyItem";
import S from "./style";

const ReplyThread = ({ replies = [] }) => {
  if (!replies.length) return null;

  return (
    <S.ReplyThreadContainer>
      {replies.map((reply) => (
        <ReplyItem key={reply.id} reply={reply} />
      ))}
    </S.ReplyThreadContainer>
  );
};

export default ReplyThread;