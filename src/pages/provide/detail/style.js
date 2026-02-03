import styled from "styled-components";

const S = {};

// ProvideDetail

S.ProvideDetailContainer = styled.div`
  max-width: 1520px;
  margin: 0 auto;
  padding: 0 30px;
`;

S.GoToList = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 32px;
  padding-bottom: 100px;
`;

// PostDetailHeader

S.PostHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 140px 0 16px;
`;

S.PostTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

S.Category = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.PALLETE.primary};
`;

S.Title = styled.h2`
  margin: 0;
  font-size: ${({ theme }) => theme.FONT_SIZE.h4};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.extraBold};
  line-height: ${({ theme }) => theme.FONT_LINE.h4};
`;

S.Date = styled.div`
  font-size: ${({ theme }) => theme.FONT_SIZE.h7};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
  color: #8d8d8d;
`;

S.LikeAndScrap = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
  padding-top: 4px;
`;

S.CountItems = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
`;

S.Icon = styled.img`
  width: 18px;
  height: 18px;
  object-fit: contain;
  display: block;
`;

S.Count = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #8d8d8d;
`;

// PostContentCard

S.PostContainer = styled.section`
  width: 100%;
  background: #ffffff;
  padding: 18px 0;
`;

S.TopLine = styled.div`
  width: 100%;
  height: 1px;
  background: #d9d9d9;
  margin-bottom: 18px;
`;

S.BottomLine = styled.div`
  width: 100%;
  height: 1px;
  background: #d9d9d9;
  margin-top: 18px;
`;

S.PostContent = styled.div`
  min-height: 520px;
  p {
    margin: 0 0 12px;
    line-height: 1.6;
  }
`;

export default S;
