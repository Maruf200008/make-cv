import Image from "next/image";
import customerSupport from "../images/CustomerSupport.svg";
import language from "../images/Languages.svg";
import match from "../images/Match.svg";
import template from "../images/Template.svg";
import demo from "../images/Track.svg";
export default function CareerPlatform() {
  return (
    <div className=" my-20">
      <div className=" flex items-center justify-center flex-col gap-10">
        <h1 className=" text-center text-[35px] sm:text-[50px] font-extrabold md:text-[60px]">
          A complete career platform
        </h1>
        <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-x-10  gap-y-20 w-full my-10">
          <div className=" space-y-20 flex items-center flex-col  ">
            <div className="relative w-full flex items-center justify-center  ">
              <Image src={demo} alt="demo" width={150} />
              <div className=" flex items-center justify-center -rotate-45 h-[130px] w-[80px] bg-[#b8c2f3] rounded-full absolute -top-7 -z-20" />
            </div>
            <div className=" text-center space-y-3">
              <h1 className=" text-[22px]  font-extrabold">
                CV and cover letter builder
              </h1>
              <div className=" sm:w-[80%] md:w-full   mx-auto">
                <p className=" text-lg text-neutral-600">
                  Effortlessly create unlimited CVs and cover letters then store
                  them all in one place.
                </p>
              </div>
            </div>
          </div>
          <div className=" space-y-14 flex items-center flex-col">
            <div className="relative w-full flex items-center justify-center  ">
              <Image src={template} alt="template" width={120} />
              <div className=" flex items-center justify-center -rotate-45 h-[130px] w-[80px] bg-[#fcd7d2] rounded-full absolute -top-7  -z-20" />
            </div>
            <div className=" text-center space-y-3">
              <h1 className=" text-[22px]  font-extrabold">
                20+ professional templates
              </h1>
              <div className="sm:w-[80%] md:w-full   mx-auto">
                <p className=" text-lg text-neutral-600">
                  Stand out from the crowd with our 20+ CV and cover letter
                  templates.
                </p>
              </div>
            </div>
          </div>
          <div className=" space-y-20 flex items-center flex-col">
            <div className="relative w-full flex items-center justify-center  ">
              <Image src={match} alt="match" width={140} />
              <div className=" flex items-center justify-center -rotate-45 h-[130px] w-[80px] bg-[#ffeab0] rounded-full absolute -top-7  -z-20" />
            </div>
            <div className=" text-center space-y-3">
              <h1 className=" text-[22px]  font-extrabold">Matched jobs</h1>
              <div className="sm:w-[80%] md:w-full   mx-auto">
                <p className=" text-lg text-neutral-600">
                  Be the first to receive relevant jobs based on your profile
                  and experience.
                </p>
              </div>
            </div>
          </div>
          <div className=" space-y-20 flex items-center flex-col">
            <div className="relative w-full flex items-center justify-center">
              <Image src={demo} alt="demo" width={150} />
              <div className=" flex items-center justify-center -rotate-45 h-[130px] w-[80px] bg-[#fcd7d2] rounded-full absolute -top-7 -z-20" />
            </div>
            <div className=" text-center space-y-3">
              <h1 className=" text-[22px]  font-extrabold">
                Organise and track applications
              </h1>
              <div className="sm:w-[80%] md:w-full   mx-auto">
                <p className=" text-lg text-neutral-600">
                  Neatly organise your applications and receive notifications
                  when they are viewed.
                </p>
              </div>
            </div>
          </div>
          <div className=" space-y-14 flex items-center flex-col">
            <div className="relative w-full flex items-center justify-center">
              <Image src={language} alt="language" width={130} />
              <div className=" flex items-center justify-center -rotate-45 h-[130px] w-[80px] bg-[#ffe39a] rounded-full absolute -top-7 -z-20" />
            </div>
            <div className=" text-center space-y-3">
              <h1 className=" text-[22px]  font-extrabold">
                CV in multiple languages
              </h1>
              <div className="sm:w-[80%] md:w-full  mx-auto">
                <p className=" text-lg text-neutral-600">
                  Create your CV and cover letter in over 25 different
                  languages.
                </p>
              </div>
            </div>
          </div>
          <div className=" space-y-14 flex items-center flex-col">
            <div className="relative w-full flex items-center justify-center">
              <Image src={customerSupport} alt="language" width={150} />
              <div className=" flex items-center justify-center -rotate-45 h-[130px] w-[80px] bg-[#b8c2f3] rounded-full absolute -top-7 -z-20" />
            </div>
            <div className=" text-center space-y-3">
              <h1 className=" text-[22px] font-extrabold">
                Fast, localised customer support
              </h1>
              <div className="sm:w-[80%] md:w-full  mx-auto">
                <p className=" text-lg text-neutral-600">
                  Easily reached by chat, email and phone, we offer prompt and
                  precise support in 19 languages when you need it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
