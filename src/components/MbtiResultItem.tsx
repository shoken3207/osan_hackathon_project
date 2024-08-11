import { MBTI, MBTI_BACKGROUND_COLOR } from "@/const";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@radix-ui/react-hover-card";
import React from "react";

const MbtiResultItem = ({
  mbtiId,
  value,
}: {
  mbtiId: number;
  value: number;
}) => {
  const findMbti = MBTI.find(({ id }) => id === mbtiId);
  const graphColor = findMbti ? MBTI_BACKGROUND_COLOR[findMbti.category] : "#ccc";
  const widthClass: string = `w-[40%]`;
  const graphColorClass: string = findMbti
    ? `bg-[${MBTI_BACKGROUND_COLOR[findMbti.category]}]`
    : "";
  return (
    <li>
      {findMbti && (
        <div className=" flex items-center justify-between">
          <HoverCard>
            <HoverCardTrigger>
              <p className="hover:text-blue-400">{findMbti.name_en}</p>
            </HoverCardTrigger>
            <HoverCardContent className="min-w-16 max-w-60  shadow-md bg-white p-4">
              <p className={` text-center `}>{findMbti.name_jp}</p>
              <p className="text-center">{findMbti.name_en}</p>
              <p>{findMbti.desc}</p>
            </HoverCardContent>
          </HoverCard>
          <div className="w-8/12">
            <div style={{ width: `${value}%` ,background: `${MBTI_BACKGROUND_COLOR[findMbti.category]}` }} className={`h-4`}>
              {value}
            </div>
          </div>
        </div>
      )}
    </li>
  );
};

export default MbtiResultItem;
