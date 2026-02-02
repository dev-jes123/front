import React from "react";
import S from "./style";
import Title from "../../../components/title/Title";
import { Link } from "react-router-dom";
import IconButton from "../../../components/button/IconButton";
import CommunityListItem from "../../../components/communityListItem/CommunityListItem";

const MainCommunity = () => {
  return (
    <S.CommunityContainer>
      <S.CommunityInner>
        <S.TitleContainer>
          <Title
            highlightText="강남구 역삼동"
            text="커뮤니티"
            iconName="coffee"
            iconSize="xlarge"
            subtitle="우리 동네 사람들과 정보 공유 "
          />
          <Link to="/community">
            <IconButton
              iconName="plus-white"
              iconSize="xsmall"
              color="white"
              padding="smallMedium"
              shape="pill"
              font="bttxt"
              backgroundColor="primary"
              border="primary"
              borderWidth="medium"
            >
              전체보기
            </IconButton>
          </Link>
        </S.TitleContainer>
        <S.CommunityWrap>
          <CommunityListItem />
          <CommunityListItem />
          <CommunityListItem />
          <CommunityListItem />
          <CommunityListItem />
          <CommunityListItem />
        </S.CommunityWrap>
      </S.CommunityInner>
    </S.CommunityContainer>
  );
};

export default MainCommunity;
