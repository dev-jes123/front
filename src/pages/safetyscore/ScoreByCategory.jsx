import React from "react";
import S from "./style";

const ScoreByCategory = ({ image, alt, title, score = 0, maxScore = 100 }) => {
  const percent = Math.min(Math.round((score / maxScore) * 100), 100);

  return (
    <S.ScoreByCategoryContainer>
      <S.CategotyImage>
        <img src={image} alt={alt || title} />
      </S.CategotyImage>
      <S.CategotyContent>
        <S.CategotyContentTitle>{title}</S.CategotyContentTitle>
        <S.CategotyContentScore>{percent}점</S.CategotyContentScore>
        <S.ScoreGaugeWrapper>
          <S.ScoreGaugeFill $percent={percent} />
        </S.ScoreGaugeWrapper>
      </S.CategotyContent>
    </S.ScoreByCategoryContainer>
  );
};

export default ScoreByCategory;
