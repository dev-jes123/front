import React from "react";
import S from "./style";
import MemberInput from "../../components/memberInput/MemberInput";
import { BaseButton } from "../../components/button/style";
import Icon from "../../components/icon/Icon";
import { Link } from "react-router-dom";

const MemberJoin = () => {
  return (
    <S.MemberContainer>
      <S.MemberContainerBox>
        <S.MemberBoxTitle>회원가입</S.MemberBoxTitle>
        <S.MemberTitleDesc>새로운 계정을 만들어 보세요.</S.MemberTitleDesc>
        <S.MemberForm>
          <S.MemberInputBox>
            <S.MemberInputLabel>이메일</S.MemberInputLabel>
            <MemberInput placeholderText="example@gmail.com" type="email" />
          </S.MemberInputBox>
          <S.MemberInputBox>
            <S.MemberInputLabel>닉네임</S.MemberInputLabel>
            <MemberInput placeholderText="닉네임을 입력하세요" type="text" />
          </S.MemberInputBox>
          <S.MemberInputBox>
            <S.MemberInputLabel>비밀번호</S.MemberInputLabel>
            <MemberInput
              placeholderText="비밀번호를 입력하세요"
              type="password"
            />
          </S.MemberInputBox>
          <S.MemberInputBox>
            <S.MemberInputLabel>비밀번호 확인</S.MemberInputLabel>
            <MemberInput
              placeholderText="비밀번호를 다시 입력하세요"
              type="password"
            />
          </S.MemberInputBox>
          <S.MemberCheckbox>
            <S.MemberInputCheckbox type="checkbox" name="checkboxLabel" />
            <S.MemberInputLabel name="checkboxLabel">
              개인정보 처리방침에 동의합니다
            </S.MemberInputLabel>
          </S.MemberCheckbox>
          <BaseButton
            onClick={() => {
              console.log("회원가입 버튼 클릭");
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
            회원가입
          </BaseButton>
          <S.MemberOrLine>
            <span>또는</span>
          </S.MemberOrLine>
          <BaseButton
            size="medium"
            shape="square"
            backgroundColor="#FEE500"
            padding="large"
          >
            <Icon name="kakao" size="small" />
            카카오톡 로그인
          </BaseButton>
          <BaseButton
            size="medium"
            shape="square"
            backgroundColor="white"
            padding="large"
            border="gray03"
          >
            <Icon name="naver" size="small" />
            네이버 로그인
          </BaseButton>
          <S.MemberGuestLink>
            이미 계정이 있으신가요?
            <Link to="/login">로그인</Link>
          </S.MemberGuestLink>
        </S.MemberForm>
      </S.MemberContainerBox>
    </S.MemberContainer>
  );
};

export default MemberJoin;
