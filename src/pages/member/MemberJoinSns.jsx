import React from "react";
import S from "./style";
import MemberInput from "../../components/memberInput/MemberInput";
import { BaseButton } from "../../components/button/style";

const MemberJoinSns = () => {
  return (
    <S.MemberContainer>
      <S.MemberContainerBox>
        <S.MemberBoxTitle>추가 정보 입력</S.MemberBoxTitle>
        <S.MemberTitleDesc>SNS 로그인으로 가입되었습니다</S.MemberTitleDesc>
        <S.MemberForm>
          <S.MemberInputBox>
            <S.MemberInputLabel>닉네임</S.MemberInputLabel>
            <MemberInput placeholderText="닉네임을 입력하세요" type="text" />
          </S.MemberInputBox>
          <S.MemberCheckbox>
            <S.MemberInputCheckbox type="checkbox" name="checkboxLabel" />
            <S.MemberInputLabel name="checkboxLabel">
              개인정보 처리방침에 동의합니다
            </S.MemberInputLabel>
          </S.MemberCheckbox>
          <BaseButton
            onClick={() => {
              console.log("시작하기 버튼 클릭");
            }}
            type="submit"
            size="bttxt"
            font="bold"
            shape="square"
            backgroundColor="primary"
            border="primary"
            color="white"
            padding="large"
          >
            시작하기
          </BaseButton>
        </S.MemberForm>
      </S.MemberContainerBox>
    </S.MemberContainer>
  );
};

export default MemberJoinSns;
