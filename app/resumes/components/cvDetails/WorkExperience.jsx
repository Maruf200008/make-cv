"use client";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";

import useResumeStore from "@/app/store/useResumesStore";
import SingleExperience from "./SingleExperience";

export default function WorkExperiece() {
  const [workExperiencTitle, setWorkExperienceTitel] =
    useState("Work experience");

  const { addExperince, updateExperinceHeading } = useResumeStore((state) => state);
  const { workExperience } = useResumeStore((state) => state.resumeData);




  const handleAddExperience = () => {
    const newExperience = {
      id: uuidv4(),
      jobTitle: "",
      company: "",
      location: "",
      startDate: "",
      endDate: "",
      summary: "",
    };
    addExperince(newExperience);
  };

  return (
    <div>
      <div className="mt-7 border-b pb-5">
        <div className="flex items-center gap-1 ">
          <input
            type="text"
            placeholder="Work experience"
            className=" focus:outline-none text-[20px] font-semibold py-2 w-[200px]"
            onChange={(e) => {
              setWorkExperienceTitel(e.target.value)
              updateExperinceHeading(e.target.value)
            }}
            width={20}
            value={workExperiencTitle}
          />
          <div className="text-[25px] text-neutral-500">
            <MdEdit />
          </div>
        </div>
        <p className=" text-neutral-500">
          Showcase what you did versus what you achieved by writing your daily
          duties in 4-6 lines, followed by two or more key achievements where
          possible.
        </p>
        <div className=" space-y-3">
          {workExperience.map((experience) => {
            return <SingleExperience key={experience.id} id={experience.id} />;
          })}
        </div>

        <div
          onClick={handleAddExperience}
          className="flex items-center gap-4 mt-5 cursor-pointer group"
        >
          <div className="p-3 bg-red-100 rounded-full text-primary group-hover:bg-red-200 ease-in duration-300">
            <FaPlus />
          </div>
          <p className="text-primary">Add work Experience</p>
        </div>
      </div>
    </div>
  );
}
