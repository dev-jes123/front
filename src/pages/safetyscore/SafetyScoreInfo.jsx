import React from "react";
import S from "./style";
import IconButton from "../../components/button/IconButton";
import Icon from "../../components/icon/Icon";
import { Link } from "react-router-dom";

const SafetyScoreInfo = () => {
  return (
    <S.SafetyScoreInfo>
      <S.SafetyScoreInfoBox>
        <S.SafetyScoreInfoBoxHeader>
          경남 창원시 진해구 명제로 478
        </S.SafetyScoreInfoBoxHeader>
        <S.SafetyScoreInfoBoxTitle>
          우리 동네는 얼마나 안전할까요?
        </S.SafetyScoreInfoBoxTitle>
        <S.SafetyScoreInfoBoxButtons>
          <IconButton
            iconName="location-black"
            iconSize="small"
            color="black"
            size="medium"
            shape="rounded"
            padding="smallMedium"
            backgroundColor="white"
            border="white"
            borderWidth="medium"
          >
            <Link to={"/select-location"}>지역 변경하기</Link>
          </IconButton>
          <IconButton
            iconName="bookmarks"
            iconSize="small"
            color="black"
            size="medium"
            shape="rounded"
            padding="smallMedium"
            backgroundColor="white"
            border="white"
            borderWidth="medium"
          >
            지역 저장하기
          </IconButton>
        </S.SafetyScoreInfoBoxButtons>
      </S.SafetyScoreInfoBox>
      <S.SafetyScoreBox>
        <S.Scorebox>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/icons/face1.png`}
            alt="face"
          />
          <span>95점</span>
        </S.Scorebox>
        <S.ScoreboxContent>
          <S.ScoreboxContentTitle>
            밤에도 비교적 안전한 지역!
          </S.ScoreboxContentTitle>
          <S.ScoreboxContentSubtitle>
            전국 평균 대비 상위 18%에 드는 지역이에요.
          </S.ScoreboxContentSubtitle>
        </S.ScoreboxContent>
      </S.SafetyScoreBox>
    </S.SafetyScoreInfo>
  );
};

export default SafetyScoreInfo;
