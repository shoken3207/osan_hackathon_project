// "use client";
import ImageUpload from "@/components/ImageUpload";
import InputImage from "@/components/InputImage";
import MbtiResultList from "@/components/MbtiResultList";

export default function Home() {
  const resultList = [
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
  ];
  // const [result, setResult] = useState({});
  // const [file, setFile] = useState(null);
  // useEffect(() => {
  //   if (!file) return;
  //   console.log("called");
  // }, [file]);
  return (
    <div className="w-full min-h-screen bg-[#f5fbfd]">
      <div className=" w-11/12 mx-auto max-w-xl bg-white">
        <ImageUpload />
        {/* <InputImage /> */}
        <MbtiResultList resultList={resultList} />
      </div>
    </div>
  );
}
