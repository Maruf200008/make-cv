import Image from "next/image";
import buildCV from "../images/BuildCV.svg";
import GetJobRecommendations from "../images/GetJobRecommendations.svg";
import sendCV from "../images/SendCV.svg";
export default function SuccessStory() {
  return (
    <div className="  mt-[200px] mb-20">
      <h1 className=" text-center text-[40px] font-extrabold leading-[50px] sm:text-[50px] sm:leading-[60px] md:text-[60px] lg:text-[80px] lg:leading-[90px]">
        Your success story starts here.
      </h1>
      <div className="w-[80%] mx-auto flex items-center justify-center ">
        <p className=" text-center text-neutral-600 text-xl mt-4">
          {`We'll help you at every step of your career journey.`}
        </p>
      </div>
      <div className=" my-20  grid md:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-16  ">
        <div className=" flex items-center flex-col gap-6">
          <Image src={buildCV} alt="buildCV" width={200} />

          <div className="sm:w-[70%] md:w-full">
            <p className=" text-xl text-neutral-600 text-center">
              Build an eye-catching CV effortlessly from any device.
            </p>
          </div>
        </div>
        <div className=" flex items-center flex-col gap-6">
          <Image
            src={GetJobRecommendations}
            alt="GetJobRecommendations"
            width={200}
          />
          <div className="sm:w-[70%] md:w-full">
            <p className=" text-xl text-neutral-600 text-center">
              Get job recommendations that match your skills and interests.
            </p>
          </div>
        </div>
        <div className=" flex items-center flex-col gap-6">
          <Image src={sendCV} alt="sendCV" width={250} />
          <div className="sm:w-[70%] md:w-full">
            <p className=" text-xl text-neutral-600 text-center">
              Organise and send all of your applications with a click of a
              mouse.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
