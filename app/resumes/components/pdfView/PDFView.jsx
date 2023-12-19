import { HiDownload } from "react-icons/hi";
import CvLeftView from "./CvLeftView";
import CvRightView from "./CvRightView";

export default function PDFView() {
  return (
    <div className=" w-full flex items-center  relative flex-col gap-10 ">
      <div className=" grid grid-cols-3 w-full  h-[950px] shadow-lg">
        <div className=" col-span-1  bg-slate-700">
          <CvLeftView />
        </div>
        <div className=" col-span-2 bg-white">
          <CvRightView />
        </div>
      </div>

      <div className=" flex items-center gap-3 text-white bg-primary px-5 py-3 rounded-full cursor-pointer hover:bg-red-700 ease-in duration-300">
        <h1 className=" text-lg ">Download</h1>
        <div className=" text-2xl">
          <HiDownload />
        </div>
      </div>
    </div>
  );
}
