import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import exampleCV from "../images/exampleCv.jpg";
import heroImg from "../images/hero1.jpg";
import trustPilotLogo from "../images/trustPilotLogo.jpg";

export default function HeroSection() {
  return (
    <div className=" grid gric lg:grid-cols-2 gap-[120px] items-center ">
      <div className=" space-y-10">
        <div>
          <h1 className="sm:text-[65px] md:text-[80px] text-[45px] font-extrabold leading-[60px] sm:leading-[80px] text-center lg:text-left md:leading-[90px]">
            Create your CV like a pro
          </h1>
        </div>
        <div className="flex items-center justify-center lg:justify-start">
          <p className=" md:w-[90%] sm:text-lg text-neutral-600 md:text-xl text-center lg:text-left ">
            Create your professional CV in a matter of minutes from anywhere
            using our advanced CV builder.
          </p>
        </div>
        <Link href="/resumes" className=" flex items-center justify-center lg:justify-start">
          <button className=" bg-primary px-5 sm:px-7 py-3 sm:py-5 ease-in duration-300 sm:text-lg md:text-xl rounded-full text-white font-semibold hover:bg-[#da513c]">
            + Create your CV
          </button>
        </Link>
        <div className=" flex items-center gap-5  justify-center lg:justify-start">
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
      <div className=" relative flex items-center justify-center">
        <Image
          src={heroImg}
          alt="heroImg"
          className=" rounded-tr-[80px] rounded-bl-[80px]"
        />
        <div className=" w-[300px] h-[300px] rounded-full absolute bg-[#ffd86f] -bottom-20 md:right-1 -z-30 -right-5"></div>
        <div className=" rounded-br-[50px] bg-neutral-200 h-[220px] w-[200px]  sm:w-[300px] sm:h-[320px] absolute md:bottom-[50px] lg:bottom-[30px] bottom-[-40px] lg:left-[-40px] md:left-5 flex items-center justify-center flex-col space-y-5">
          <div></div>
          <div className=" relative">
            <div className=" sm:h-[150px] h-[120px] w-[80px] sm:w-[120px] bg-white shadow-xl  top-0 absolute -rotate-12" />
            <Image
              src={exampleCV}
              alt="exampleCV"
              className=" rotate-12 z-30  w-[80px] sm:w-[120px]"
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
