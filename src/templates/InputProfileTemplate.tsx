"use client";
import MbtiCard from "@/components/MbtiCard";
import { Button } from "@/components/ui/button";
import { GENDER, GENDER_ARRAY, MBTI } from "@/const";
import React, { useState } from "react";

const InputProfileTemplate = () => {
  const [gender, setGender] = useState<number>(GENDER.MALE);
  const [selectMbtis, setSelectMbtis] = useState<number[]>([]);
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    const mbti = MBTI.find(({ id }) => id === Number(e.target.value));
    if (mbti) {
      setSelectMbtis(mbti.goodCompatibilityMbtis);
    }
  };
  return (
    <div className=" w-11/12 mx-auto max-w-4xl p-4 rounded-lg bg-white">
      <div className="flex flex-col gap-y-6">
        <div className="flex flex-col gap-y-1">
          <label>あなたの性別を選択してください</label>
          {GENDER_ARRAY.map(({ text, value }) => (
            <div key={text} className="flex items-center justify-start gap-x-1">
              <input
                type="radio"
                value={value}
                name="gender"
                id={String(value)}
                defaultChecked={gender === value}
                onChange={() => setGender(value)}
              />
              <label htmlFor={String(value)}>{text}</label>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-y-1">
          <label>
            あなたのMBTIを選択してください。（選択すると、相性のいいMBTIが自動で選択されます。）
          </label>
          <select
            className="p-2 border border-gray-300 rounded-lg max-w-80"
            onChange={(e) => handleSelect(e)}
            name="mbti"
          >
            {MBTI.map(({ id, name_en, name_jp }) => (
              <option key={id} value={id}>{`${name_jp}（${name_en}）`}</option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-y-12">
          <label htmlFor="">
            あなたと相性が良いまたは、好みのMBTIを選択してください
          </label>
          <div className="flex flex-wrap  justify-start gap-x-6 gap-y-6">
            {MBTI.map((mbti) => (
              <MbtiCard
                key={mbti.id}
                gender={gender}
                mbti={mbti}
                selectMbtis={selectMbtis}
                setSelectMbtis={setSelectMbtis}
              />
            ))}
          </div>
        </div>
        <div className="flex justify-end">
          <Button size="lg">登録</Button>
        </div>
      </div>
    </div>
  );
};

export default InputProfileTemplate;
