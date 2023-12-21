"use client";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";

import useResumeStore from "@/app/store/useResumesStore";
import SingleSkill from "./SingleSkill";

export default function AddSkills() {
  const [skillsTitle, setSkillsTitle] = useState("Skills");
  const { addSkill, deleteSkill, updateSkillHeading } = useResumeStore(
    (state) => state
  );
  const { skills } = useResumeStore((state) => state.resumeData);

  const handleAddSkill = () => {
    const newSkill = {
      id: uuidv4(),
      skillTitle: "",
      skillLevel: "",
    };
    addSkill(newSkill);
  };

  const handleDelete = (id) => {
    deleteSkill(id);
  };

  return (
    <div>
      <div className=" mt-7 border-b pb-5">
        <div className=" flex items-center gap-1 ">
          <input
            type="text"
            placeholder="Skills"
            className=" focus:outline-none text-[20px] font-semibold py-2 w-[100px]"
            onChange={(e) => {
              setSkillsTitle(e.target.value);
              updateSkillHeading(e.target.value);
            }}
            width={20}
            value={skillsTitle}
          />
          <div className=" text-[25px] text-neutral-500">
            <MdEdit />
          </div>
        </div>
        <p className=" text-neutral-500">
          Elaborate on your areas of expertise by focusing on your most relevant
          hard skills.
        </p>
        <div className=" space-y-3">
          {skills.map((item) => {
            return (
              <SingleSkill
                key={item.id}
                id={item.id}
                handleDelete={handleDelete}
              />
            );
          })}
        </div>

        <div
          onClick={handleAddSkill}
          className=" flex items-center gap-4 mt-5 cursor-pointer group "
        >
          <div className=" p-3 bg-red-100 rounded-full text-primary group-hover:bg-red-200 ease-in duration-300">
            <FaPlus />
          </div>
          <p className=" text-primary">Add Skill</p>
        </div>
      </div>
    </div>
  );
}
