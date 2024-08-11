"use client";
import { InputData } from "@/templates/HomeTemplate";
import { Dispatch, SetStateAction } from "react";
import { Button } from "./ui/button";
import axios from "axios";
import { BASE_URL } from "@/const";
import { Result } from "./Result";
import { useToast } from "./ui/use-toast";

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
      const response = await axios.post(`${BASE_URL}/api/test`, inputData);
      console.log("Response:", response.data);
      setResult({
        desc: "aaaaaaaaaaaaaaa",
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
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          明るさ:
          <input
            value={inputData.brightness}
            onChange={(e) =>
              setInputData({ ...inputData, brightness: e.target.value })
            }
          />
        </label>
        <br />
        <label>
          彩度:
          <input
            value={inputData.saturation}
            onChange={(e) =>
              setInputData({ ...inputData, saturation: e.target.value })
            }
          />
        </label>
        <br />
        <label>
          屋内写真と屋外写真のどちらですか？
          <select
            value={inputData.indoorOutdoor}
            onChange={(e) =>
              setInputData({ ...inputData, indoorOutdoor: e.target.value })
            }
          >
            <option value="">Select one</option>
            <option value="indoor">Indoor</option>
            <option value="outdoor">Outdoor</option>
          </select>
        </label>
        <br />
        <label>
          自撮り写真と他撮り写真のどちらですか？:
          <select
            value={inputData.selfieOther}
            onChange={(e) =>
              setInputData({ ...inputData, selfieOther: e.target.value })
            }
          >
            <option value="">Select one</option>
            <option value="selfie">自撮り</option>
            <option value="other">他撮り</option>
          </select>
        </label>
        <br />
        <label>
          人数:
          <input
            type="number"
            value={inputData.numberOfPeople}
            onChange={(e) =>
              setInputData({ ...inputData, numberOfPeople: e.target.value })
            }
          />
        </label>
        <br />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default InputForm;
