import styled from "styled-components";

const S = {};

S.MemberInputField = styled.input`
  width: 100%;
  background: #FBFBFB;
  border: 1px solid ${({ theme }) => theme.PALLETE.gray.greyscale02};
  padding: 11px 16px;
`;

export default S;