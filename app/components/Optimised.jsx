import Image from "next/image";
import buildcvhome from "../images/buildcvhome.webp";
export default function Optimised() {
  return (
    <div className=" flex items-center justify-center flex-col">
      <div className=" grid md:grid-cols-2 gap-[30px] lg:w-[80%] items-center space-y-[80px]    ">
        <div className="relative">
          <div className="   h-[450px] overflow-hidden rounded-bl-[100px] flex items-center justify-center   ">
            <div className="">
              <Image src={buildcvhome} alt="buildcvhome" />
            </div>
            <div className=" h-[280px] w-[130px] rounded-full -z-30 -rotate-45 absolute bg-[#ffe39a]  -bottom-20" />
          </div>
        </div>
        <div className="  space-y-6 flex items-center justify-center md:justify-start md:items-start  flex-col p-4 ">
          <h1 className=" text-[30px] sm:text-[35px] md:text-[35px] font-extrabold  leading-[50px] text-center md:text-left">
            Have your CV built or optimised by our professionals
          </h1>
          <p className=" text-lg text-neutral-600 text-center md:text-left">
            Send us your current CV or your education and work experience
            details and one of our experts will craft your CV using one of our
            professional CV templates.
          </p>
         
          <button className=" bg-neutral-200 px-7 py-3 rounded-full font-semibold hover:bg-neutral-400 ease-in duration-300">
            Build my CV
          </button>
       
        </div>
      </div>
    </div>
  );
}
