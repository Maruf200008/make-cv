import Image from "next/image";
import Link from "next/link";
import cornell from "../images/example-cv-cornell-016332.webp";
import erasmus from "../images/example-cv-erasmus-f2614c.webp";
import yale from "../images/example-cv-yale-ffd86f.webp";

export default function ChooseTemplates() {
  return (
    <div>
      <div className=" flex items-center justify-center space-y-5 text-white my-32 flex-col text-center">
        <h1 className=" text-[35px] sm:text-[45px] font-extrabold">
          Choose from eye-catching templates
        </h1>
        <p className=" lg:w-[50%] text-neutral-400 text-lg">
          Choose from 20+ professional, unique and versatile CV templates
          designed by experts. Our template designs have been vetted by HR
          professionals and hiring managers to increase your chances of landing
          your dream job interview.
        </p>
        <div className=" grid lg:grid-cols-3 sm:grid-cols-2 gap-10  w-full py-10">
          <div className=" bg-neutral-300 group rounded-xl flex items-center justify-center flex-col gap-y-4 relative">
            <Image src={yale} alt="yale" />
            <div>
              <h1 className=" text-2xl text-black font-bold">Yale</h1>
              <p className=" text-neutral-700">Modern</p>
            </div>
            <Link href="/resumes" className=" absolute flex items-center group-hover:opacity-100 ease-in duration-300 justify-center bg-primary opacity-0 px-10 rounded-full py-3 cursor-pointer ">
              Choose
            </Link>
          </div>
          <div className=" bg-neutral-300 group rounded-xl py-10 flex items-center justify-center flex-col gap-y-4 relative">
            <Image src={cornell} alt="cornell" />
            <div>
              <h1 className=" text-2xl text-black font-bold">Cornell</h1>
              <p className=" text-neutral-700">Creative</p>
            </div>
            <Link href="/resumes" className=" absolute flex items-center group-hover:opacity-100 ease-in duration-300 justify-center bg-primary opacity-0 px-10 rounded-full py-3 cursor-pointer ">
              Choose
            </Link>
          </div>
          <div className=" bg-neutral-300 group rounded-xl py-10 flex items-center justify-center flex-col gap-y-4 relative">
            <Image src={erasmus} alt="erasmus" />
            <div>
              <h1 className=" text-2xl text-black font-bold">Erasmus</h1>
              <p className=" text-neutral-700">Modern</p>
            </div>
            <Link href="/resumes" className=" absolute flex items-center group-hover:opacity-100 ease-in duration-300 justify-center bg-primary opacity-0 px-10 rounded-full py-3 cursor-pointer ">
              Choose
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
