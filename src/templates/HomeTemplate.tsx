"use client";
import ImageUpload from "@/components/ImageUpload";
import InputForm from "@/components/InputForm";
import InputImage from "@/components/InputImage";
import MbtiResultList from "@/components/MbtiResultList";

const HomeTemplate = ({
  resultList,
}: {
  resultList: { mbtiId: number; value: number }[];
}) => {
  return (
    <div className="w-full min-h-screen bg-[#f5fbfd]">
      <div className=" w-11/12 mx-auto max-w-xl bg-white">
        <ImageUpload />
        <InputImage />
        <InputForm />
        <MbtiResultList resultList={resultList} />
      </div>
    </div>
  );
};

export default HomeTemplate;
