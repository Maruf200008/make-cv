"use client";
import useResumeStore from "@/app/store/useResumesStore";
import Image from "next/image";
import { FaCalendarAlt, FaCarAlt, FaUser } from "react-icons/fa";
import { FaIdCardClip, FaLocationDot, FaPhone, FaStar } from "react-icons/fa6";
import { ImManWoman } from "react-icons/im";
import { IoMdHome } from "react-icons/io";
import { IoMailSharp } from "react-icons/io5";
import { LuLink } from "react-icons/lu";
import { MdComputer, MdLanguage } from "react-icons/md";

export default function CvLeftView() {
  const resumeData = useResumeStore((state) => state.resumeData);
  const {
    firstName,
    lastName,
    personalDetail,
    photo,
    email,
    phone,
    address,
    postalCode,
    city,
    drvingLicenses,
    gender,
    dateOfBirth,
    placeOfBirth,
    nationality,
    maritalStatus,
    linkedin,
    skills,
    personalWebsite,
    skillTitle,
    personalProfileTitle
  } = resumeData || {};

  console.log( personalProfileTitle)

  let contentAddress;
  if (address && !city && !postalCode) {
    contentAddress = address;
  } else if (address && !city && postalCode) {
    contentAddress = `${address}, ${postalCode}`;
  } else if (address && city && !postalCode) {
    contentAddress = `${address}, ${city}`;
  } else if (address && city && postalCode) {
    contentAddress = `${address}, ${city}, ${postalCode}`;
  }

  const checkSkillLeavel = (level) => {
    let contentRating;
    if (level === "Beginner") {
      contentRating = (
        <div className=" flex items-center gap-1">
          <FaStar />
        </div>
      );
    } else if (level === "Average") {
      contentRating = (
        <div className=" flex items-center gap-1">
          <FaStar />
          <FaStar />
        </div>
      );
    } else if (level === "Skillful") {
      contentRating = (
        <div className=" flex items-center gap-1">
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
      );
    } else if (level === "Experienced") {
      contentRating = (
        <div className=" flex items-center gap-1">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
      );
    } else if (level === "Expert") {
      contentRating = (
        <div className=" flex items-center gap-1">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
      );
    }
    return contentRating;
  };

  return (
    <div className=" px-4 my-4">
      <div className=" space-y-4">
        {photo && (
          <Image
            src={URL.createObjectURL(photo)}
            alt="profileImg"
            height={150}
            width={150}
            className="h-[150px] w-[150px] object-cover border-2 border-white overflow-hidden rounded-full justify-center  flex items-center mx-auto"
          />
        )}
        <div className=" text-white space-y-2 ">
          <h3 className=" uppercase font-semibold ">
            {personalProfileTitle === "" ? "Personal Details" : personalProfileTitle}
          </h3>
          {/* name */}
          {firstName || lastName ? (
            <div className=" flex  gap-3 text-[12px]">
              <div className="text-[14px]">
                <FaUser />
              </div>
              <div className="text-style">
                <h3 className=" font-semibold">Name</h3>
                <p>
                  {firstName && !lastName
                    ? firstName
                    : firstName + " " + lastName}
                </p>
              </div>
            </div>
          ) : null}
          {/* Address */}
          {address && (
            <div className=" flex  gap-3 text-[12px]">
              <div className="text-[16px]">
                <IoMdHome />
              </div>
              <div className="text-style">
                <h3 className=" font-semibold">Address</h3>
                <p>{contentAddress}</p>
              </div>
            </div>
          )}
          {/* Phone */}
          {phone && (
            <div className=" flex  gap-3 text-[12px]">
              <div className="text-[14px]">
                <FaPhone />
              </div>
              <div className="text-style">
                <h3 className=" font-semibold">Phone number</h3>
                <p>{phone}</p>
              </div>
            </div>
          )}
          {/* email */}
          {email && (
            <div className=" flex  gap-3 text-[12px] w-full  ">
              <div className="text-[14px] ">
                <IoMailSharp />
              </div>
              <div className="text-style">
                <h3 className="font-semibold">Email</h3>
                <p className=" ">{email}</p>
              </div>
            </div>
          )}
          {/* date of birth */}
          {dateOfBirth && (
            <div className=" flex  gap-3 text-[12px] w-full  ">
              <div className="text-[14px] ">
                <FaCalendarAlt />
              </div>
              <div className="text-style">
                <h3 className="font-semibold">Date of birth</h3>
                <p className=" ">{dateOfBirth}</p>
              </div>
            </div>
          )}
          {/* Place of birth*/}
          {placeOfBirth && (
            <div className=" flex  gap-3 text-[12px] w-full  ">
              <div className="text-[14px] ">
                <FaLocationDot />
              </div>
              <div className="text-style">
                <h3 className="font-semibold">Place of birth</h3>
                <p className=" ">{placeOfBirth}</p>
              </div>
            </div>
          )}
          {/* Gender */}
          {gender && (
            <div className=" flex  gap-3 text-[12px] w-full  ">
              <div className="text-[16px] ">
                <ImManWoman />
              </div>
              <div className="text-style">
                <h3 className="font-semibold">Gender</h3>
                <p className=" ">{gender}</p>
              </div>
            </div>
          )}
          {/* Driving licence */}
          {drvingLicenses && (
            <div className=" flex  gap-3 text-[12px] w-full  ">
              <div className="text-[16px] ">
                <FaCarAlt />
              </div>
              <div className="text-style">
                <h3 className="font-semibold">Driving Licence</h3>
                <p className=" ">{drvingLicenses}</p>
              </div>
            </div>
          )}
          {/* Nationality */}
          {nationality && (
            <div className=" flex  gap-3 text-[12px] w-full  ">
              <div className="text-[16px] ">
                <MdLanguage />
              </div>
              <div className="text-style">
                <h3 className="font-semibold">Nationality</h3>
                <p className=" ">{nationality}</p>
              </div>
            </div>
          )}
          {/* Marital Status */}
          {maritalStatus && (
            <div className=" flex  gap-3 text-[12px] w-full  ">
              <div className="text-[16px] ">
                <FaIdCardClip />
              </div>
              <div className="text-style">
                <h3 className="font-semibold">Marital Status</h3>
                <p className=" ">{maritalStatus}</p>
              </div>
            </div>
          )}
          {/* LinkedIn */}
          {linkedin && (
            <div className=" flex  gap-3 text-[12px] w-full  ">
              <div className="text-[16px] ">
                <LuLink />
              </div>
              <div className="text-style">
                <h3 className="font-semibold">LinkedIn</h3>
                <p className=" ">{linkedin}</p>
              </div>
            </div>
          )}
          {/* Website */}
          {personalWebsite && (
            <div className=" flex  gap-3 text-[12px] w-full  ">
              <div className="text-[16px] ">
                <MdComputer />
              </div>
              <div className="text-style">
                <h3 className="font-semibold">Website</h3>
                <p className=" ">{personalWebsite}</p>
              </div>
            </div>
          )}
        </div>
        {/* skills */}
        <div className=" text-white space-y-2">
          {skills && skills.length > 0 && <h3 className=" uppercase font-semibold">{skillTitle ? skillTitle : "Skills"}</h3>}
          <div>
            {skills.map((skill) => {
              const { id, skillTitle, skillLevel } = skill;
              const level = checkSkillLeavel(skillLevel);

              return (
                <div
                  key={id}
                  className="  flex items-center justify-between text-[12px] font-semibold"
                >
                  <div className="text-style">{skillTitle}</div>
                  <div>{level}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
