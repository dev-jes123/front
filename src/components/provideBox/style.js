import { Link } from "react-router-dom";
import styled from "styled-components";

const S = {};

S.ProvideBox = styled.div`
  max-width: 360px;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  min-height: 180px;

`;
S.ProvideBoxButtonWrapper = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
`;

S.ProvideBoxLink = styled(Link)`
  width: 100%;
  height: 100%;
  color: inherit;
  text-decoration: none;
`;

S.ProvideBoxImageWrapper = styled.div`
  width: 100%;
  aspect-ratio: 3/2;
  overflow: hidden;
  line-height: 0;
`;

S.ProvideBoxImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

S.ProvideBoxContent = styled.div`
  padding: 30px 25px;
  background: ${({ theme }) => theme.PALLETE.secondary};
`;

S.ProvideBoxTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-bottom: 30px;
  min-width: 0;
`;

S.ProvideBoxTitleSubtext = styled.div`
  font-size: ${({ theme }) => theme.FONT_SIZE["bttxt"]};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT["semiBold"]};
  line-height: ${({ theme }) => theme.FONT_LINE["brtxt"]};
  color: ${({ theme }) => theme.PALLETE.primary};
  `;

S.ProvideBoxTitleText = styled.div`
  font-size: ${({ theme }) => theme.FONT_SIZE["h4"]};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT["semiBold"]};
  line-height: ${({ theme }) => theme.FONT_LINE["brtxt"]};
  white-space: nowrap;
  overflow: hidden;
  height: 28px;
  min-width: 0;
  text-overflow: ellipsis;
`;

S.ProvideBoxContentBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

S.ProvideBoxDate = styled.div`
  font-size: ${({ theme }) => theme.FONT_SIZE["bttxt"]};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT["regular"]};
  line-height: ${({ theme }) => theme.FONT_LINE["brtxt"]};
  color: ${({ theme }) => theme.PALLETE.gray["greyscale04"]};
`;

S.ProvideBoxMore = styled.div`
  background-color: ${({ theme }) => theme.PALLETE.white};
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default S;