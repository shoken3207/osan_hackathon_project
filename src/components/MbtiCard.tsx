import { GENDER, MBTI_BACKGROUND_COLOR, MBTI_TEXT_COLOR } from "@/const";
import React, { SetStateAction, Dispatch } from "react";

const MbtiCard = ({
  gender,
  mbti,
  setSelectMbtis,
  selectMbtis,
}: {
  gender: number;
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
  const imageSrc =
    gender === GENDER.MALE
      ? `/images/mbti/female/${name_en.substring(0, 4)}.jpg`
      : `/images/mbti/male/${name_en.substring(0, 4)}.jpg`;
  const selectedClass = selectMbtis.includes(id) ? `border-2 rounded-md` : "";
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    if (selectMbtis.includes(id)) {
      const index = selectMbtis.findIndex((x) => x === id);
      console.log(selectMbtis, index);
      const copySelectMbtis = [...selectMbtis];
      copySelectMbtis.splice(index, 1);
      setSelectMbtis(copySelectMbtis);
    } else {
      setSelectMbtis([...selectMbtis, id]);
    }
  };
  return (
    <div
      style={{
        boxShadow: `8px 8px 16px -3px  ${MBTI_BACKGROUND_COLOR[category]};`,
        borderColor: MBTI_TEXT_COLOR[category],
      }}
      onClick={(e) => handleClick(e)}
      className={`${selectedClass} cursor-pointer flex flex-col w-full max-w-60 p-3 gap-y-3`}
    >
      <div className="w-[50%] mx-auto max-w-20 aspect-square bg-slate-400 rounded-[50%]">
        <img className="w-full h-full  rounded-[50%]" src={imageSrc} alt="" />
      </div>
      <p
        style={{ color: `${MBTI_TEXT_COLOR[category]}` }}
        className={` text-xl text-center font-bold`}
      >
        {name_jp}
      </p>
      <p className="text-center -mt-4 text-sm">{name_en}</p>
      <p className="text-sm">{desc}</p>
    </div>
  );
};

export default MbtiCard;
