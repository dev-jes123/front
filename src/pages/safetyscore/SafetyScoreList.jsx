import React from "react";
import S from "./style";
import ScoreByCategory from "./ScoreByCategory";
import Icon from "../../components/icon/Icon";

const SafetyScoreList = () => {
  return (
    <>
      <S.SafetyScoreTitleCenter>항목별 점수</S.SafetyScoreTitleCenter>
      <S.ScoreByCategoryContainer>
        <ScoreByCategory
          image={`${process.env.PUBLIC_URL}/assets/images/safety-categoty-cctv.png`}
          alt="cctv"
          title="CCTV"
          score={85}
        />
        <ScoreByCategory
          image={`${process.env.PUBLIC_URL}/assets/images/safety-categoty-lamp.png`}
          alt="가로등"
          title="가로등"
          score={30}
        />
        <ScoreByCategory
          image={`${process.env.PUBLIC_URL}/assets/images/safety-categoty-police.png`}
          alt="경찰시설"
          title="경찰시설"
          score={45}
        />
        <ScoreByCategory
          image={`${process.env.PUBLIC_URL}/assets/images/safety-categoty-crime.png`}
          alt="범죄주의구간"
          title="범죄주의구간"
          score={85}
        />
      </S.ScoreByCategoryContainer>
      <S.SafetyScoreListContent>
        <S.SafetyScoreListContentTitle>
          이 점수는 왜 이렇게 나왔나요?
        </S.SafetyScoreListContentTitle>
        <S.SafetyScoreListContentList>
          <li>
            <Icon name="pin" /> CCTV 12개
          </li>
          <li>
            <Icon name="pin" /> 가로등 30개
          </li>
          <li>
            <Icon name="pin" /> 경찰시설 45개
          </li>
          <li>
            <Icon name="pin" /> 범죄주의구간 1곳
          </li>
        </S.SafetyScoreListContentList>
      </S.SafetyScoreListContent>
    </>
  );
};

export default SafetyScoreList;
