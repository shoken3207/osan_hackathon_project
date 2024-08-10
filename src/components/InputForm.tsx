"use client"
import { useState } from "react";

const InputForm = () => {
  const [inputData, setInputData] = useState({
    brightness: "",
    saturation: "",
    indoorOutdoor: "", // "indoor" or "outdoor"
    selfieOther: "", // "selfie" or "other"
    numberOfPeople: "",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Here you can handle form submission, e.g., call ChatGPT API with these values
    console.log("Form submitted with values:", inputData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Brightness:
          <input
            type="number"
            value={inputData.brightness}
            onChange={(e) => setInputData({ ...inputData, brightness: e.target.value })}
          />
        </label>
        <br />
        <label>
          Saturation:
          <input
            type="number"
            value={inputData.saturation}
            onChange={(e) => setInputData({ ...inputData, saturation: e.target.value })}
          />
        </label>
        <br />
        <label>
          Indoor or Outdoor:
          <select
            value={inputData.indoorOutdoor}
            onChange={(e) => setInputData({ ...inputData, indoorOutdoor: e.target.value })}
          >
            <option value="">Select one</option>
            <option value="indoor">Indoor</option>
            <option value="outdoor">Outdoor</option>
          </select>
        </label>
        <br />
        <label>
          Selfie or Other-taken:
          <select
            value={inputData.selfieOther}
            onChange={(e) => setInputData({ ...inputData, selfieOther: e.target.value })}
          >
            <option value="">Select one</option>
            <option value="selfie">Selfie</option>
            <option value="other">Other</option>
          </select>
        </label>
        <br />
        <label>
          Number of People:
          <input
            type="number"
            value={inputData.numberOfPeople}
            onChange={(e) => setInputData({ ...inputData, numberOfPeople: e.target.value })}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default InputForm;