import React from "react";
import S from "./style";

const MemberInput = ({ placeholderText, type }) => {
  return (
    <S.MemberInputField
      type={type}
      placeholder={placeholderText}
    ></S.MemberInputField>
  );
};

export default MemberInput;
