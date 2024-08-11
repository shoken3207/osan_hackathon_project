"use client";
import { InputData } from "@/templates/HomeTemplate";
import { Dispatch, SetStateAction } from "react";
import { Button } from "./ui/button";
import axios from "axios";
import { BASE_URL, MBTI } from "@/const";
import { Result } from "./Result";
import { useToast } from "./ui/use-toast";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

const InputForm = ({
  setInputData,
  setResult,
  inputData,
}: {
  setResult: Dispatch<SetStateAction<Result>>;
  setInputData: Dispatch<SetStateAction<InputData>>;
  inputData: InputData;
}) => {
  const { toast } = useToast();
  const user = useSelector((state: RootState) => state.userData);
  console.log(user.goodCompatibilityMbtis);
  const mbtiNames = user.goodCompatibilityMbtis.map(x => {
    const mbti = MBTI.find(({id}) => id === x);
    return mbti?.name_en
  })
  console.log(mbtiNames)
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const {
      brightness,
      saturation,
      indoorOutdoor,
      selfieOther,
      numberOfPeople,
    } = inputData;
    if (
      !brightness ||
      !saturation ||
      !indoorOutdoor ||
      !selfieOther ||
      !numberOfPeople
    ) {
      toast({
        variant: "destructive",
        description: "未入力の項目があります。",
      });
      return;
    }
    try {
      // APIへのリクエストを送信
      console.log("inputData: ", inputData);
      const response = await axios.post(`${BASE_URL}/api/test`, {...inputData, goodMbti: mbtiNames});
      console.log("Response:", response.data.name.choices[0].message.content);
      const text = response.data.name.choices[0].message.content
      setResult({
        desc: text,
        mbtiList: [
          { mbtiId: 8, value: 93 },
          { mbtiId: 10, value: 68 },
          { mbtiId: 2, value: 66 },
          { mbtiId: 6, value: 49 },
          { mbtiId: 16, value: 44 },
          { mbtiId: 5, value: 42 },
          { mbtiId: 3, value: 40 },
          { mbtiId: 9, value: 40 },
          { mbtiId: 11, value: 38 },
          { mbtiId: 1, value: 34 },
          { mbtiId: 4, value: 33 },
          { mbtiId: 14, value: 33 },
          { mbtiId: 7, value: 23 },
          { mbtiId: 15, value: 20 },
          { mbtiId: 12, value: 6 },
          { mbtiId: 13, value: 3 },
        ],
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
    console.log("Form submitted with values:", inputData);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="brightness">明るさ:</label>
          <input
            id="brightness"
            type="number"
            value={inputData.brightness}
            onChange={(e) => setInputData({ ...inputData, brightness: e.target.value })}
            className="input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="saturation">彩度:</label>
          <input
            id="saturation"
            type="number"
            value={inputData.saturation}
            onChange={(e) => setInputData({ ...inputData, saturation: e.target.value })}
            className="input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="indoorOutdoor">屋内写真と屋外写真のどちらですか？</label>
          <select
            id="indoorOutdoor"
            value={inputData.indoorOutdoor}
            onChange={(e) => setInputData({ ...inputData, indoorOutdoor: e.target.value })}
            className="select"
          >
            <option value="">Select one</option>
            <option value="indoor">屋内写真</option>
            <option value="outdoor">屋外写真</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="selfieOther">自撮り写真と他撮り写真のどちらですか？</label>
          <select
            id="selfieOther"
            value={inputData.selfieOther}
            onChange={(e) => setInputData({ ...inputData, selfieOther: e.target.value })}
            className="select"
          >
            <option value="">Select one</option>
            <option value="selfie">自撮り</option>
            <option value="other">他撮り</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="numberOfPeople">人数:</label>
          <input
            id="numberOfPeople"
            type="number"
            value={inputData.numberOfPeople}
            onChange={(e) => setInputData({ ...inputData, numberOfPeople: e.target.value })}
            className="input"
          />
        </div>
        <Button type="submit" className="submit-button">アドバイスをもらう</Button>
      </form>
    </div>
  );
};

export default InputForm;

