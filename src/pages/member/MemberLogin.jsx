import React from "react";
import S from "./style";
import MemberInput from "../../components/memberInput/MemberInput";
import BaseButton from "../../components/button/BaseButton";
import Icon from "../../components/icon/Icon";
import { Link } from "react-router-dom";

const MemberLogin = () => {
  return (
    <S.MemberContainer>
      <S.MemberContainerBox>
        <S.MemberBoxTitle>로그인</S.MemberBoxTitle>
        <S.MemberTitleDesc>계정에 로그인하여 시작하세요.</S.MemberTitleDesc>
        <S.MemberForm>
          <MemberInput placeholderText="이메일 입력" type="email" />
          <MemberInput placeholderText="비밀번호 입력" type="password" />
          <BaseButton
            onClick={() => {
              console.log("로그인 버튼 클릭");
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
            로그인
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
            아직 회원이 아니신가요?
            <Link to="/join">회원가입</Link>
          </S.MemberGuestLink>
        </S.MemberForm>
      </S.MemberContainerBox>
    </S.MemberContainer>
  );
};

export default MemberLogin;
