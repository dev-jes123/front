import styled from "styled-components";

const S = {};

S.MemberContainer = styled.div`
  width: 100%;
  background-color: #FBFBFB;
  display: flex;
  justify-content: center;
  padding: 180px 0 80px;
  align-items: center;
`;

S.MemberContainerBox = styled.div`
  width: 90%;
  max-width: 480px;
  background-color: #fff;
  padding: 40px 25px;
  border: 1px solid ${({ theme }) => theme.PALLETE.gray.greyscale02};
`;

S.MemberBoxTitle = styled.h2`
  font-size: ${({ theme }) => theme.FONT_SIZE.h2};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.extraBold};
  text-align: center;
  color: ${({ theme }) => theme.PALLETE.black};
  margin-bottom: 10px;
`;

S.MemberTitleDesc = styled.p`
  color: ${({ theme }) => theme.PALLETE.gray.greyscale04};
  font-size: ${({ theme }) => theme.FONT_SIZE.bttxt};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  text-align: center;
  margin-bottom: 30px;
`

S.MemberForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

S.MemberOrLine = styled.div`
  margin: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  color: ${({ theme }) => theme.PALLETE.gray.greyscale04};
  font-size: ${({ theme }) => theme.FONT_SIZE.bttxt};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};

  &::before,
  &::after {
    content: "";
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.PALLETE.gray.greyscale02};
  }
`;

S.MemberGuestLink = styled.div`
  color: ${({ theme }) => theme.PALLETE.gray.greyscale04};
  font-size: ${({ theme }) => theme.FONT_SIZE.bttxt};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  text-align: center;
  margin-top: 10px;

  & a{
    color: ${({ theme }) => theme.PALLETE.primary};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
    margin-left: 8px;
  }
`;

S.MemberInputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;
`;

S.MemberInputLabel = styled.label`
  color: ${({ theme }) => theme.PALLETE.gray.greyscale04};
  font-size: ${({ theme }) => theme.FONT_SIZE.linktxt};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.medium};
  margin-bottom: 5px;
`;

S.MemberInputCheckbox = styled.input`
  width: 16px;
  height: 16px;
  margin-right: 5px;
  border: 1px solid ${({ theme }) => theme.PALLETE.gray.greyscale02};
  border-radius:  4px;
  appearance: none;
  &:checked {
    background-color: ${({ theme }) => theme.PALLETE.primary};
    border: 1px solid ${({ theme }) => theme.PALLETE.primary};
    appearance: checkbox;
  }
`;

S.MemberCheckbox = styled.div`
  display: flex;
  align-items: center;
  gap: 0px;
  & label {
    margin-bottom: 0px;
  }
`;

export default S;