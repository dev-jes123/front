import React, { useMemo, useState } from 'react';
import PostDetailHeader from './PostDetailHeader';
import PostContentCard from './PostContentCard';
import CommentComposer from './CommentComposer';
import CommentThread from './CommentThread';
import BackToListButton from './BackToListButton';
import S from './style';
import { mockCommunity } from '../../../mock/mockCommunity';
import { useParams } from 'react-router-dom';

const CommunityDetail = () => {
  const {id} = useParams()
  const postId = Number(id)
  const post = useMemo(
    () => mockCommunity.find((p) => p.id === postId),
    [postId]
  )
  const [comments, setComments] = useState(() => post?.comments ?? [])
  if(!post){
    return <div>게시글을 찾을 수 없습니다.</div>
  }

  const handleAddComment = ({content}) => {
    const newComment = {
      id: Date.now(),
      author: "내 닉네임",
      authorProfile: "/assets/images/icons/user-profile.png",
      content,
      createdAt: "방금 전",
      likeCount: 0,
      replyCount: 0,
      replies: []
    }

    setComments((prev) => [...prev, newComment])
  }

  return (
    <S.CommunityDetailContainer>
      <PostDetailHeader post={post} />
      <PostContentCard post={post} />
      <CommentComposer postId={post.id} onSubmit={handleAddComment} />
      <CommentThread comments={comments} />
      <BackToListButton />
    </S.CommunityDetailContainer>
  );
};

export default CommunityDetail;