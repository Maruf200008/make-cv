import Image from "next/image";
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
      <div className=" grid grid-cols-2 gap-[130px] justify-center">
        <div className=" relative">
          <Image
            src={exampleCV}
            alt="exampleCV"
            className=" shadow-lg z-40 absolute"
          />
          <div className=" bg-neutral-300 h-[550px] w-[300px] absolute -top-10 rounded-tl-[80px] -left-10" />
        </div>
        <div className="  w-[65%] space-y-10">
          <h1 className=" text-[60px] leading-[75px] font-extrabold">
            Strengthen your CV
          </h1>
          <div className=" space-y-2">
            <h1 className=" text-2xl font-extrabold">Best in class</h1>
            <p className=" text-lg text-neutral-600">
              With our intuitive and comprehensive CV builder creating your CV
              is a breeze.
            </p>
          </div>
          <div className=" space-y-2">
            <h1 className=" text-2xl font-extrabold">Professional templates</h1>
            <p className=" text-lg text-neutral-600">
              Choose from over 20+ professional CV templates designed by experts
              and hailed by successful professionals.
            </p>
          </div>
          <div className=" space-y-2">
            <h1 className=" text-2xl font-extrabold">Tips & advice</h1>
            <p className=" text-lg text-neutral-600">
              Automatically receive recommendations and tips while creating your
              CV.
            </p>
          </div>
          <div className=" space-y-2">
            <h1 className=" text-2xl font-extrabold">More job interviews</h1>
            <p className=" text-lg text-neutral-600">
              Impress your next employer with a striking and distinctive CV
              regardless of your experience. Score interviews for those jobs
              you've always dreamed of.
            </p>
          </div>
        </div>
      </div>
      <div className=" grid grid-cols-2 gap-10 mt-[220px]">
        <div className=" space-y-7 w-[64%]">
          <h1 className=" text-[50px] leading-[60px] font-extrabold">
            Get hired at top companies
          </h1>
          <p className=" text-lg text-neutral-500">
            CVMaker's career platform, analytics and job match-making services
            have helped more than 120 000 happy customers so far.
          </p>
          <button className=" bg-primary px-7 py-5 ease-in duration-300 text-lg rounded-full text-white font-semibold hover:bg-[#da513c]">
            + Create your CV
          </button>
        </div>
        <div className=" space-y-10 mb-10">
          <div className=" flex items-center  gap-[60px] w-full ">
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
          <div className="flex items-center  gap-[60px] w-full ">
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
