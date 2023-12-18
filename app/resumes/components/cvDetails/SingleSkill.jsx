"use client";
import { useState } from "react";
import { IoDocumentOutline } from "react-icons/io5";
import { RiDeleteBinLine } from "react-icons/ri";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function SingleSkill({ id, handleDelete }) {
  const [skillToggle, setSkillToggle] = useState(true);
  const [lavel, setLavel] = useState("Beginner");
  const [skillIndex, setSkillIndex] = useState(0);
  const [skill, setSkill] = useState("Untitled");
  const skillData = [
    "Beginner",
    "Average",
    "Skillful",
    "Experienced",
    "Expert",
  ];

  console.log(lavel);

  const handleSkill = (value) => {
    const { index, skillLavel } = value;
    setSkillIndex(index);
    setLavel(skillLavel);
  };
  return (
    <div>
      <div>
        <div className=" flex items-center justify-between">
          <div
            onClick={() => setSkillToggle(!skillToggle)}
            className=" flex items-center gap-4 mt-5 cursor-pointer group"
          >
            <div className=" text-2xl bg-neutral-100 p-2 rounded-full group-hover:bg-neutral-200 ease-in duration-300">
              <IoDocumentOutline />
            </div>
            <p className="focus:outline-none font-semibold text-lg text-neutral-500">
              {skill !== "" ? skill : "Untitled"}
            </p>
          </div>
          <div className="  flex items-center gap-3">
            <div
              className=" text-xl cursor-pointer"
              onClick={() => setSkillToggle(!skillToggle)}
            >
              {!skillToggle ? <IoIosArrowDown /> : <IoIosArrowUp />}
            </div>
            <div
              onClick={() => handleDelete(id)}
              className=" text-xl cursor-pointer hover:bg-neutral-100 p-2 rounded-full ease-in duration-300"
            >
              <RiDeleteBinLine />
            </div>
          </div>
        </div>
        <div
          className={
            skillToggle ? "space-y-1 my-3 flex items-center gap-4" : "hidden"
          }
        >
          <div>
            <label className=" text-neutral-500 text-lg">Skill</label>
            <input
              placeholder="e.g. Service Designer"
              type="text"
              onChange={(e) => setSkill(e.target.value)}
              className=" border border-r-neutral-200 rounded-md p-4 focus:outline-none w-full"
            />
          </div>
          <div>
            <div className=" flex items-center justify-between">
              <label className=" text-neutral-500 text-lg">Level</label>
              <label className=" text-neutral-500 text-lg">{lavel}</label>
            </div>

            <div>
              <div className="relative overflow-x-auto border rounded-md">
                <table className="w-full text-sm text-left rtl:text-right ">
                  <thead className="text-xs ">
                    <tr className="">
                      {skillData.map((data, index) => {
                        return (
                          <th
                            key={index}
                            onClick={() =>
                              handleSkill({
                                index: index + 1,
                                skillLavel: data,
                              })
                            }
                            className={
                              skillIndex > index || index === 0
                                ? "p-7 cursor-pointer bg-primary border-r checked:bg-slate-300"
                                : "p-7 cursor-pointer  border-r checked:bg-slate-300"
                            }
                          ></th>
                        );
                      })}
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
