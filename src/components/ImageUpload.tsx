"use client";
import { BASE_URL } from "@/const";
import { InputData } from "@/templates/HomeTemplate";
import React, { Dispatch, SetStateAction, useState } from "react";

const ImageUpload = ({
  setInputData,
  inputData,
}: {
  setInputData: Dispatch<SetStateAction<InputData>>;
  inputData: InputData;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState("");

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files && event.target.files.length > 0) {
      const selectedFile = event.target.files[0];
      const url = URL.createObjectURL(selectedFile);
      setPreviewUrl(url);

      setIsLoading(true);

      const formData = new FormData();
      formData.append("image", selectedFile);

      try {
        const response = await fetch(`${BASE_URL}/api/upload`, {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          console.log("Image uploaded successfully!");
        } else {
          console.error("Error uploading image:", response.statusText);
        }
        setInputData({ ...inputData, brightness: 0, saturation: 0 });
      } catch (error) {
        console.error("Error uploading image:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="mb-4"
      />
      <img src={previewUrl} alt="" />
    </div>
  );
};

export default ImageUpload;
