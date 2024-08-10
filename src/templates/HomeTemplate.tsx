"use client";
import ImageUpload from "@/components/ImageUpload";
import InputForm from "@/components/InputForm";
import MbtiResultList from "@/components/MbtiResultList";
import { useState } from "react";

export type InputData = {
  brightness: number;
  saturation: number;
  indoorOutdoor: string;
  selfieOther: string;
  numberOfPeople: string;
};

const HomeTemplate = ({
  resultList,
}: {
  resultList: { mbtiId: number; value: number }[];
}) => {
  const [inputData, setInputData] = useState({
    brightness: 0,
    saturation: 0,
    indoorOutdoor: "",
    selfieOther: "",
    numberOfPeople: "",
  });
  return (
    <div className=" w-11/12 mx-auto max-w-3xl p-4 rounded-lg bg-white">
      <ImageUpload inputData={inputData} setInputData={setInputData} />
      <InputForm inputData={inputData} setInputData={setInputData} />
      <MbtiResultList resultList={resultList} />
    </div>
  );
};

export default HomeTemplate;
