import React from "react";
import MbtiResultItem from "./MbtiResultItem";

const MbtiResultList = ({
  resultList,
}: {
  resultList: { mbtiId: number; value: number }[];
}) => {
  return (
    <ul className="w-full">
      {resultList.map(({ mbtiId, value }) => (
        <MbtiResultItem key={mbtiId} mbtiId={mbtiId} value={value} />
      ))}
    </ul>
  );
};

export default MbtiResultList;
