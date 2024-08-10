"use client";
import { InputData } from "@/templates/HomeTemplate";
import { Dispatch, SetStateAction, useState } from "react";

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
          インドア or アウトドア:
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
          自撮り or 他撮り:
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default InputForm;
