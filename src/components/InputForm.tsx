"use client";
import { InputData } from "@/templates/HomeTemplate";
import { Dispatch, SetStateAction, useState } from "react";
import { Button } from "./ui/button";

const InputForm = ({
  setInputData,
  inputData,
}: {
  setInputData: Dispatch<SetStateAction<InputData>>;
  inputData: InputData;
}) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form submitted with values:", inputData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          明るさ:
          <input
            type="number"
            disabled
            value={inputData.brightness}
            onChange={(e) =>
              setInputData({ ...inputData, brightness: Number(e.target.value) })
            }
          />
        </label>
        <br />
        <label>
          彩度:
          <input
            type="number"
            value={inputData.saturation}
            onChange={(e) =>
              setInputData({ ...inputData, saturation: Number(e.target.value) })
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
