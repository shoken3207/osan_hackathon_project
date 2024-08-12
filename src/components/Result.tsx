"use client";
import React from "react";
import MbtiResultList from "./MbtiResultList";
import { LoaderCircle } from "lucide-react";

export type Result = {
  desc: string;
  mbtiList: { mbtiId: number; value: number }[];
} | null;

const Result = ({ result }: { result: Result }) => {
  console.log("result: ", result);
  return (
    <div className=" mt-10">
      {result === null ? (
        // <div>Loading...</div>
        <div className="w-full flex justify-centerf">
          {/* <LoaderCircle className="animate-spin" size={40} /> */}
        </div>
      ) : (
        <div className="flex flex-col gap-y-6">
          <p>{result.desc}</p>
          <MbtiResultList resultList={result.mbtiList} />
        </div>
      )}
    </div>
  );
};

export default Result;
