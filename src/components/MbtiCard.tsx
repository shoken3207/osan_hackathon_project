import { MBTI_BACKGROUND_COLOR, MBTI_TEXT_COLOR } from "@/const";
import React, { SetStateAction, Dispatch } from "react";

const MbtiCard = ({
  mbti,
  setSelectMbtis,
  selectMbtis,
}: {
  mbti: {
    id: number;
    name_jp: string;
    name_en: string;
    desc: string;
    category: number;
    goodCompatibilityMbtis: number[]; // 追加部分
  };
  setSelectMbtis: Dispatch<SetStateAction<number[]>>;
  selectMbtis: number[];
}) => {
  const { name_jp, id, category, name_en, desc } = mbti;
  const textColorClass = `text-[${MBTI_TEXT_COLOR[category]}]`;
  const shadowColorClass = `shadow-[${MBTI_BACKGROUND_COLOR[category]}]`;
  const selectedClass = selectMbtis.includes(id)
    ? "border-4 border-color-red"
    : "";
  return (
    <div
      className={`${selectedClass} cursor-pointer flex flex-col w-full max-w-64 shadow-md p-4 gap-y-4 ${shadowColorClass}`}
    >
      <div className="w-[60%] mx-auto max-w-20 aspect-square rounded-[50%] bg-slate-400"></div>
      <p className={`${textColorClass} text-2xl text-center`}>{name_jp}</p>
      <p className="text-center -mt-4">{name_en}</p>
      <p className="">{desc}</p>
    </div>
  );
};

export default MbtiCard;
