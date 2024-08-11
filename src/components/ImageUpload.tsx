"use client";
import { BASE_URL } from "@/const";
import { InputData } from "@/templates/HomeTemplate";
import React, { Dispatch, SetStateAction, useRef, useState } from "react";

const ImageUpload = ({
  setInputData,
  inputData,
}: {
  setInputData: Dispatch<SetStateAction<InputData>>;
  inputData: InputData;
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
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

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const file = event.target.files?.[0];
      if (!file) return;

      const img = new Image();
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      img.onload = () => {
        console.log("load");
        if (!canvas || !ctx) return;
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        console.log("data: ", data);
        let totalSaturation = 0;
        let totalBrightness = 0;
        let count = 0;

        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];

          const hsv = rgbToHsv(r, g, b);
          totalSaturation += hsv[1];
          totalBrightness += hsv[2];
          count++;
        }

        console.log(totalSaturation / count);
        console.log(totalBrightness / count);
      };

      img.src = URL.createObjectURL(file);
    } catch (err) {
      console.log("err: ", err);
    }
  };

  const rgbToHsv = (
    r: number,
    g: number,
    b: number
  ): [number, number, number] => {
    r /= 255;
    g /= 255;
    b /= 255;

    const max = Math.max(r, g, b),
      min = Math.min(r, g, b);
    const d = max - min;
    const v = max;

    let s = max === 0 ? 0 : d / max;
    let h = 0;
    if (max !== min) {
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }
      h /= 6;
    }

    return [h, s, v];
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => handleImageUpload(e)}
        className="mb-4"
      />
      <img src={previewUrl} alt="" />
    </div>
  );
};

export default ImageUpload;
