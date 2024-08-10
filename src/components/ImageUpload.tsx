import React from "react";

const ImageUpload = () => {
  const handleChange = (e: React.InputHTMLAttributes<HTMLInputElement>) => {
    console.log(e.target.files[0]);
  };
  return (
    <div>
      <input type="file" name="" id="" />
    </div>
  );
};

export default ImageUpload;
