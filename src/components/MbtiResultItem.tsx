import { MBTI } from "@/const";
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
  const widthClass = `w-[41%]`;
  return (
    <li>
      {findMbti && (
        <div className=" flex items-center justify-between">
          <HoverCard>
            <HoverCardTrigger>
              <p>{findMbti.name_en}</p>
            </HoverCardTrigger>
            <HoverCardContent className="min-w-16  shadow-md bg-white p-4">
              <p>{findMbti.name_jp}</p>
              <p>{findMbti.name_en}</p>
              <p>{findMbti.desc}</p>
            </HoverCardContent>
          </HoverCard>
          <div className="w-8/12">
            <div className={`w-[41%] h-4 bg-slate-500`}>{value}</div>
          </div>
        </div>
      )}
    </li>
  );
};

export default MbtiResultItem;
