"use client";

import { useRef, useState } from "react";

import "react-datepicker/dist/react-datepicker.css";

import useResumeStore from "@/app/store/useResumesStore";
import Image from "next/image";
import { MdEdit, MdOutlineRefresh } from "react-icons/md";
import AddSkills from "./cvDetails/AddSkills";
import AdditionalFields from "./cvDetails/AdditionalFields";
import Education from "./cvDetails/Education";
import WorkExperiece from "./cvDetails/WorkExperience";

export default function PersonalDetails() {
  const [personalDetails, setPersonalDetails] = useState("Personal details");
  const [personalProfileTitle, setPersonalProfileTitle] =
    useState("Personal profile");
  const [personalProfile, setPersonalProfile] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [photo, setPhoto] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");

  const imgRef = useRef(null);

  const {
    updateFirstName,
    updateLastName,
    updatePhoto,
    updateEmail,
    updatePosition,
    updatePersonalProfileTitle,
    updatePersonalProfile,
  } = useResumeStore((state) => state);

  const handleImageClick = () => {
    imgRef.current.click();
  };

  return (
    <div className=" space-y-3 p-4 ">
      {/* Personal details */}
      <div className=" flex items-center gap-1 ">
        <input
          type="text"
          placeholder="Personal Details"
          className=" focus:outline-none text-[25px] font-extrabold py-2 w-[220px]"
          onChange={(e) => {
            setPersonalDetails(e.target.value);
            updatePersonalProfileTitle(e.target.value);
          }}
          value={personalDetails}
        />
        <div className=" text-[25px] text-neutral-500">
          <MdEdit />
        </div>
      </div>
      {/*Name */}
      <div className="  grid grid-cols-2 gap-4 ">
        <div className=" space-y-1">
          <label className=" text-neutral-500 text-lg">First name</label>
          <input
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
              updateFirstName(e.target.value);
            }}
            type="text"
            className=" border border-r-neutral-200 rounded-md p-4 focus:outline-none w-full"
          />
        </div>
        <div className=" space-y-1">
          <label className=" text-neutral-500 text-lg">Last name</label>
          <input
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
              updateLastName(e.target.value);
            }}
            type="text"
            className=" border border-r-neutral-200 rounded-md p-4 focus:outline-none w-full"
          />
        </div>
      </div>
      {/* Photo */}
      <div className=" space-y-1">
        <div className=" flex gap-4 items-center cursor-pointer">
          <label className=" text-neutral-500 text-lg">Photo</label>
          <div
            onClick={() => {
              setPhoto("");
              updatePhoto("");
            }}
            className=" p-1 rounded-md text-neutral-500 text-xl hover:bg-neutral-200 ease-in duration-300"
          >
            <MdOutlineRefresh />
          </div>
        </div>

        {photo ? (
          <div
            onClick={handleImageClick}
            className="border  border-r-neutral-200 rounded-md p-4 w-full"
          >
            <label for="dropzone-file" className=" flex items-center gap-5">
              <Image
                src={URL.createObjectURL(photo)}
                alt="Photo"
                width={40}
                height={30}
                className=" rounded-full h-[35px] w-[35px] bg-slate-200 overflow-hidden"
              />
              <p className=" text-neutral-500">
                <span className=" font-semibold">Choose a file</span> or drag it
                here
              </p>
            </label>
            <input
              type="file"
              ref={imgRef}
              onChange={(e) => {
                setPhoto(e.target.files[0]);
                updatePhoto(e.target.files[0]);
              }}
              className=" hidden"
            />
          </div>
        ) : (
          <div
            onClick={handleImageClick}
            className="border  border-r-neutral-200 rounded-md p-4 w-full"
          >
            <label for="dropzone-file" className=" flex items-center gap-5">
              <div className=" w-[35px] border border-neutral-300 h-[35px] bg-neutral-200 rounded-full" />
              <p className=" text-neutral-500">
                <span className=" font-semibold">Choose a file</span> or drag it
                here
              </p>
            </label>
            <input
              onChange={(e) => {
                setPhoto(e.target.files[0]);
                updatePhoto(e.target.files[0]);
              }}
              type="file"
              ref={imgRef}
              className=" hidden"
            />
          </div>
        )}
      </div>
      {/* Email address */}
      <div className=" space-y-1">
        <label className=" text-neutral-500 text-lg">Email address</label>
        <input
          value={email}
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
            updateEmail(e.target.value);
          }}
          className=" border border-r-neutral-200 rounded-md p-4 focus:outline-none w-full"
        />
      </div>
      {/* Position */}
      <div className=" space-y-1">
        <label className=" text-neutral-500 text-lg">Position</label>
        <input
          placeholder="e.g. Service Designer"
          value={position}
          onChange={(e) => {
            setPosition(e.target.value);
            updatePosition(e.target.value);
          }}
          type="text"
          className=" border border-r-neutral-200 rounded-md p-4 focus:outline-none w-full"
        />
      </div>
      <AdditionalFields />
      {/* Personal profile */}
      <div className=" mt-7 border-b pb-5">
        <div className=" flex items-center gap-1 ">
          <input
            type="text"
            placeholder="Personal profile"
            className=" focus:outline-none text-[20px] font-semibold py-2 w-[180px]"
            onChange={(e) => {
              setPersonalProfileTitle(e.target.value);
              updatePersonalProfileTitle(e.target.value);
            }}
            width={20}
            value={personalProfileTitle}
          />
          <div className=" text-[25px] text-neutral-500">
            <MdEdit />
          </div>
        </div>
        <p className=" text-neutral-500">
          Short paragraph at the top of your CV which summarises your relevant
          experience and qualifications in 4-6 lines.
        </p>
        <div>
          <textarea
            className=" w-full focus:outline-none mt-3 border rounded-md resize-none p-4"
            value={personalProfile}
            onChange={(e) => {
              setPersonalProfile(e.target.value);
              updatePersonalProfile(e.target.value);
            }}
            cols="30"
            rows="10"
          ></textarea>
        </div>
      </div>
      <AddSkills />
      <WorkExperiece />
      <Education />
    </div>
  );
}
