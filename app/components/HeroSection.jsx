import Image from "next/image";
import { FaStar } from "react-icons/fa";
import exampleCV from "../images/exampleCv.jpg";
import heroImg from "../images/hero1.jpg";
import trustPilotLogo from "../images/trustPilotLogo.jpg";

export default function HeroSection() {
  return (
    <div className=" grid grid-cols-2 gap-[120px] items-center ">
      <div className=" space-y-10">
        <h1 className=" text-[65px] font-extrabold leading-[80px]">
          Create your CV like a pro
        </h1>
        <p className=" w-[90%] text-lg text-neutral-600">
          Create your professional CV in a matter of minutes from anywhere using
          our advanced CV builder.
        </p>
        <button className=" bg-primary px-7 py-5 ease-in duration-300 text-lg rounded-full text-white font-semibold hover:bg-[#da513c]">
          + Create your CV
        </button>
        <div className=" flex items-center gap-5">
          <div className=" flex items-center gap-1">
            <div className=" bg-[#51b27e] p-2 rounded-md text-white text-[12px]">
              <FaStar />
            </div>
            <div className=" bg-[#51b27e] p-2 rounded-md text-white text-[12px]">
              <FaStar />
            </div>
            <div className=" bg-[#51b27e] p-2 rounded-md text-white text-[12px]">
              <FaStar />
            </div>
            <div className=" bg-[#51b27e] p-2 rounded-md text-white text-[12px]">
              <FaStar />
            </div>
          </div>
          <div className=" text-lg text-neutral-500">
            Excellent, <span className=" text-black">4.5</span> on
          </div>
          <div>
            <Image src={trustPilotLogo} alt="trustPilotLogo" width={130} />
          </div>
        </div>
      </div>
      <div className=" relative">
        <Image
          src={heroImg}
          alt="heroImg"
          className=" rounded-tr-[80px] rounded-bl-[80px]"
        />
        <div className=" w-[300px] h-[300px] rounded-full absolute bg-[#ffd86f] -bottom-20 -z-30 -right-5"></div>
        <div className=" rounded-br-[50px] bg-neutral-200  w-[300px] h-[320px] absolute bottom-[50px] left-[-40px] flex items-center justify-center flex-col space-y-5">
          <div></div>
          <div className=" relative">
            <div className=" h-[150px] w-[120px] bg-white shadow-xl  top-0 absolute -rotate-12"></div>
            <Image
              src={exampleCV}
              alt="exampleCV"
              className=" rotate-12 z-30"
            />
          </div>
          <div className=" text-center">
            <h3 className=" text-xl font-semibold">John Smith</h3>
            <p>Project Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
}
