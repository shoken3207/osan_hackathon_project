import React from "react";
import MbtiResultItem from "./MbtiResultItem";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const MbtiResultList = ({
  resultList,
}: {
  resultList: { mbtiId: number; value: number }[];
}) => {
  const user = useSelector((state: RootState) => state.userData);
  const mainResult = resultList.filter(({ mbtiId }) =>
    user.goodCompatibilityMbtis.includes(mbtiId)
  );
  const subResult = resultList.filter(
    ({ mbtiId }) => !user.goodCompatibilityMbtis.includes(mbtiId)
  );
  console.log("mainResult: ", mainResult);
  console.log("subResult: ", subResult);
  return (
    <div className="flex flex-col gap-y-8">
      <div>
        <h3>相性がいいまたは、好みのMBTIの満足度</h3>
        <ul className="w-full">
          {mainResult.map(({ mbtiId, value }) => (
            <MbtiResultItem key={mbtiId} mbtiId={mbtiId} value={value} />
          ))}
        </ul>
      </div>
      <div>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>その他MBTIの満足度</AccordionTrigger>
            <AccordionContent>
              <ul className="w-full">
                {subResult.map(({ mbtiId, value }) => (
                  <MbtiResultItem key={mbtiId} mbtiId={mbtiId} value={value} />
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        {/* <h3>その他MBTIの満足度</h3>
        <ul className="w-full">
          {subResult.map(({ mbtiId, value }) => (
            <MbtiResultItem key={mbtiId} mbtiId={mbtiId} value={value} />
          ))}
        </ul> */}
      </div>
    </div>
  );
};

export default MbtiResultList;
