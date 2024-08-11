"use client";
import ImageAnalyzer from "@/components/ImageAnalyzer";
import InputForm from "@/components/InputForm";
import Result from "@/components/Result";
import { RootState } from "@/store";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export type InputData = {
  brightness: string;
  saturation: string;
  indoorOutdoor: string;
  selfieOther: string;
  numberOfPeople: string;
};

const HomeTemplate = ({}) => {
  const router = useRouter();
  const user = useSelector((state: RootState) => state.userData);
  const [inputData, setInputData] = useState({
    brightness: "",
    saturation: "",
    indoorOutdoor: "indoor",
    selfieOther: "selfie",
    numberOfPeople: "1",
  });
  const [result, setResult] = useState<{
    desc: string;
    mbtiList: { mbtiId: number; value: number }[];
  } | null>(null);
  useEffect(() => {
    if (user.goodCompatibilityMbtis.length === 0) {
      router.push("/inputProfile");
    }
  }, []);
  return (
    <div className=" w-11/12 mx-auto max-w-3xl p-4 rounded-lg bg-white">
      <ImageAnalyzer inputData={inputData} setInputData={setInputData} />
      <InputForm
        inputData={inputData}
        setInputData={setInputData}
        setResult={setResult}
      />
      <Result result={result} />
    </div>
  );
};

export default HomeTemplate;
