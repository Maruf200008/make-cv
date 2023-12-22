import Image from "next/image";
import Link from "next/link";
import amazon from "../images/amazon.svg";
import apple from "../images/apple.svg";
import exampleCV from "../images/example-cv-auckland-e9e9e9.webp";
import google from "../images/google.svg";
import microsoft from "../images/microsoft.svg";
import nike from "../images/nike.svg";
import tesla from "../images/tesla.svg";
export default function Strengthen() {
  return (
    <div>
      <div className=" grid lg:grid-cols-2 lg:gap-[50px] gap-[130px] justify-center p-4">
        <div className=" lg:relative flex items-center justify-center">
          <Image
            src={exampleCV}
            alt="exampleCV"
            className=" shadow-lg z-40 lg:absolute"
          />
          <div className=" bg-neutral-300 lg:h-[550px] lg:w-[300px] lg:absolute -top-10 rounded-tl-[80px] -left-10" />
        </div>
        <div className="  xl:w-[65%] xl:space-y-10 lg:space-y-5">
          <h1 className=" text-[50px] text-center lg:text-left lg:text-[60px] leading-[75px] font-extrabold">
            Strengthen your CV
          </h1>
          <div className=" space-y-2 sm:p-5">
            <h1 className=" text-2xl font-extrabold">Best in class</h1>
            <p className=" text-lg text-neutral-600 sm:text-xl">
              With our intuitive and comprehensive CV builder creating your CV
              is a breeze.
            </p>
          </div>
          <div className=" space-y-2 sm:p-5">
            <h1 className=" text-2xl font-extrabold">Professional templates</h1>
            <p className=" text-lg text-neutral-600">
              Choose from over 20+ professional CV templates designed by experts
              and hailed by successful professionals.
            </p>
          </div>
          <div className=" space-y-2 sm:p-5">
            <h1 className=" text-2xl font-extrabold">Tips & advice</h1>
            <p className=" text-lg text-neutral-600">
              Automatically receive recommendations and tips while creating your
              CV.
            </p>
          </div>
          <div className=" space-y-2 sm:p-5">
            <h1 className=" text-2xl font-extrabold">More job interviews</h1>
            <p className=" text-lg text-neutral-600">
              {`Impress your next employer with a striking and distinctive CV
              regardless of your experience. Score interviews for those jobs
              you've always dreamed of.`}
            </p>
          </div>
        </div>
      </div>
      <div className=" grid lg:grid-cols-2 gap-10 mt-[50px] xl:mt-[220px] p-4 items-center">
        <div className=" space-y-7 xl:w-[64%]">
          <h1 className=" md:text-[50px] text-[45px] leading-[60px] lg:text-left font-extrabold sm:text-[60px] text-center">
            Get hired at top companies
          </h1>
          <div className=" sm:flex items-center justify-center text-center sm:p-4 lg:p-0">
            <p className=" text-lg text-neutral-500 lg:text-left">
              {` CVMaker's career platform, analytics and job match-making services
            have helped more than 120 000 happy customers so far.`}
            </p>
          </div>
          <Link href="/resumes" className=" flex items-center justify-center lg:justify-start">
            <button className=" bg-primary px-7 py-5 ease-in duration-300 text-lg rounded-full text-white font-semibold hover:bg-[#da513c]">
              + Create your CV
            </button>
          </Link>
        </div>
        <div className=" space-y-10 mb-10   sm:mx-auto">
          <div className=" flex items-center gap-10   sm:gap-[60px] w-full ">
            <div>
              <Image src={google} alt="google" />
            </div>
            <div>
              <Image src={microsoft} alt="microsoft" />
            </div>
            <div>
              <Image src={apple} alt="apple" />
            </div>
          </div>
          <div className="flex items-center gap-10  sm:gap-[60px] w-full ">
            <div>
              <Image src={nike} alt="nike" />
            </div>
            <div>
              <Image src={amazon} alt="amazon" />
            </div>
            <div>
              <Image src={tesla} alt="tesla" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
