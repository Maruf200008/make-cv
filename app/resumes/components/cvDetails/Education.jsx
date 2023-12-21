"use client";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";

import useResumeStore from "@/app/store/useResumesStore";
import SingleEducation from "./SingleEducation";

export default function Education() {
  const [educationTitle, setEducationTitle] = useState("Education");
  const { addEudcation, updateEducationHeading } = useResumeStore(
    (state) => state
  );
  const { education } = useResumeStore((state) => state.resumeData);

  const handleAddEducation = () => {
    const newEducation = {
      id: uuidv4(),
      institution: "",
      degree: "",
      loaction: "",
      startDate: "",
      endDate: "",
      summary: "",
    };
    addEudcation(newEducation);
  };

  return (
    <div>
      <div className=" mt-7 border-b pb-5">
        <div className=" flex items-center gap-1 ">
          <input
            type="text"
            placeholder="Education"
            className=" focus:outline-none text-[20px] font-semibold py-2 w-[150px]"
            onChange={(e) => {
              setEducationTitle(e.target.value);
              updateEducationHeading(e.target.value);
            }}
            width={20}
            value={educationTitle}
          />
          <div className=" text-[25px] text-neutral-500">
            <MdEdit />
          </div>
        </div>
        <p className=" text-neutral-500">
          Include your education, whether it is secondary or tertiary. If
          necessary, add relevant courses, projects, or achievements (e.g.
          grades).
        </p>
        <div className=" space-y-3">
          {education.map((item) => {
            return <SingleEducation key={item.id} id={item.id} />;
          })}
        </div>

        <div
          onClick={handleAddEducation}
          className=" flex items-center gap-4 mt-5 cursor-pointer group "
        >
          <div className=" p-3 bg-red-100 rounded-full text-primary group-hover:bg-red-200 ease-in duration-300">
            <FaPlus />
          </div>
          <p className=" text-primary">Add education</p>
        </div>
      </div>
    </div>
  );
}
