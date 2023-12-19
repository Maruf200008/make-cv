import Image from "next/image";
import { FaCalendarAlt, FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { IoMdHome } from "react-icons/io";
import { IoMailSharp } from "react-icons/io5";
import profileImg from "../../../images/profileImg.jpg";

export default function CvLeftView() {
  return (
    <div className=" px-4 my-4">
      <div className=" space-y-4">
        <Image
          src={profileImg}
          alt="profileImg"
          className="h-[150px] w-[150px] border-2 border-white overflow-hidden rounded-full justify-center  flex items-center mx-auto"
        />
        <div className=" text-white space-y-2">
          <h3 className=" uppercase font-semibold">Personal Details</h3>
          {/* name */}
          <div className=" flex  gap-3 text-[12px]">
            <div className="text-[14px]">
              <FaUser />
            </div>
            <div className="text-style">
              <h3 className=" font-semibold">Name</h3>
              <p>Mohammad Maruf</p>
            </div>
          </div>
          {/* Address */}
          <div className=" flex  gap-3 text-[12px]">
            <div className="text-[16px]">
              <IoMdHome />
            </div>
            <div className="text-style">
              <h3 className=" font-semibold">Address</h3>
              <p>Chandpur, Bangladeh, Chandpur-3600</p>
            </div>
          </div>
          {/* Phone */}
          <div className=" flex  gap-3 text-[12px]">
            <div className="text-[14px]">
              <FaPhone />
            </div>
            <div className="text-style">
              <h3 className=" font-semibold">Phone number</h3>
              <p>01648-312050</p>
            </div>
          </div>
          {/* email */}
          <div className=" flex  gap-3 text-[12px] w-full  ">
            <div className="text-[14px] ">
              <IoMailSharp />
            </div>
            <div className="text-style">
              <h3 className="font-semibold">Email</h3>
              <p className=" ">mohammadmarufgazi@gmail.com</p>
            </div>
          </div>
          {/* date of birth */}
          <div className=" flex  gap-3 text-[12px] w-full  ">
            <div className="text-[14px] ">
              <FaCalendarAlt />
            </div>
            <div className="text-style">
              <h3 className="font-semibold">Date of birth</h3>
              <p className=" ">12/08/2001</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
