import { InputData } from "@/templates/HomeTemplate";
import { useState, useRef, Dispatch, SetStateAction } from "react";

const ImageAnalyzer = ({
  setInputData,
  inputData,
}: {
  setInputData: Dispatch<SetStateAction<InputData>>;
  inputData: InputData;
}) => {
  const [averageSaturation, setAverageSaturation] = useState<number | null>(
    null
  );
  const [averageBrightness, setAverageBrightness] = useState<number | null>(
    null
  );
  const [previewUrl, setPreviewUrl] = useState("");
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    const img = new Image();
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    img.onload = () => {
      if (!canvas || !ctx) return;

      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
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
      setInputData({
        ...inputData,
        brightness: (totalBrightness / count).toFixed(2),
        saturation: (totalSaturation / count).toFixed(2),
      });
      console.log("data: ", inputData);
      setAverageSaturation(totalSaturation / count);
      setAverageBrightness(totalBrightness / count);
    };

    // img.src = URL.createObjectURL(file);
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
    <div className="mb-4">
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      <img src={previewUrl} alt="" />
      <canvas ref={canvasRef} style={{ display: "none" }}></canvas>
      {averageSaturation !== null && averageBrightness !== null && (
        <div>
          <p>平均彩度 (Saturation): {averageSaturation.toFixed(2)}</p>
          <p>平均明度 (Brightness): {averageBrightness.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
};

export default ImageAnalyzer;
