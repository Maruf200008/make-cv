"use client";
import { useState } from "react";
import { IoDocumentOutline } from "react-icons/io5";
import { RiDeleteBinLine } from "react-icons/ri";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarDays } from "react-icons/fa6";

export default function SingleExperience({ id, handleDelete }) {
  const [skillToggle, setSkillToggle] = useState(true);
  const [jobTitle, setJobTitle] = useState("Untitled");
  const [company, setCompany] = useState("");
  const [location, setLoaction] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [isWroking, setIsWorking] = useState(false);
  const [summary, setSummary] = useState("");

  const handleCheckBox = () => {
    if (!isWroking) {
      setIsWorking(!isWroking);
      setEndDate(1);
    } else {
      setIsWorking(!isWroking);
      setEndDate(null);
    }
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
              {jobTitle !== "" ? jobTitle : "Untitled"}
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
        <div className={skillToggle ? "space-y-3 my-3" : "hidden"}>
          <div className=" flex items-center gap-4">
            <div>
              <label className=" text-neutral-500 text-lg">Job Title</label>
              <input
                type="text"
                onChange={(e) => setJobTitle(e.target.value)}
                className=" border border-r-neutral-200 rounded-md p-4 focus:outline-none w-full"
              />
            </div>
            <div>
              <label className=" text-neutral-500 text-lg">Company</label>
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className=" border border-r-neutral-200 rounded-md p-4 focus:outline-none w-full"
              />
            </div>
          </div>
          <div>
            <label className=" text-neutral-500 text-lg">Loaction</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLoaction(e.target.value)}
              className=" border border-r-neutral-200 rounded-md p-4 focus:outline-none w-full"
            />
          </div>
          <div>
            <div className=" flex items-center gap-4">
              <div className=" flex items-center justify-between gap-3  w-full">
                <div className=" space-y-1 w-full">
                  <div className=" cursor-pointer">
                    <label className=" text-neutral-500 text-lg">
                      Start Date
                    </label>
                    <div
                      onClick={() => setStartDate(null)}
                      className="rounded-md text-neutral-500 text-xl hover:bg-neutral-200 ease-in duration-300"
                    ></div>
                  </div>
                  <div className="border border-r-neutral-200 rounded-md p-4 focus:outline-none w-full ">
                    <label className="flex items-center justify-between">
                      <div>
                        <ReactDatePicker
                          className=" focus:outline-none"
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                        />
                      </div>
                      <div className=" text-neutral-600">
                        <FaCalendarDays />
                      </div>
                    </label>
                  </div>
                  <div className=" absolute"></div>
                </div>
                <p className=" mt-7 text-xl text-neutral-500">-</p>
                <div className=" space-y-1 w-full">
                  <div className=" cursor-pointer">
                    <label className=" text-neutral-500 text-lg">
                      End Date
                    </label>
                  </div>
                  {isWroking ? (
                    <div className="border border-r-neutral-200 bg-neutral-100 rounded-md p-4 focus:outline-none w-full ">
                      <label className="">
                        <div className=" w-full">
                          <p>Present</p>
                        </div>
                      </label>
                    </div>
                  ) : (
                    <div className="border border-r-neutral-200 rounded-md p-4 focus:outline-none w-full ">
                      <label className="flex items-center justify-between">
                        <div className=" w-full">
                          <ReactDatePicker
                            className=" focus:outline-none"
                            selected={endDate}
                            onChange={(date) => setEndDate(date)}
                          />
                        </div>
                        <div className=" text-neutral-600">
                          <FaCalendarDays />
                        </div>
                      </label>
                    </div>
                  )}
                  <div className=" absolute"></div>
                </div>
              </div>
            </div>
            <div class="flex items-center mt-3">
              <input
                type="checkbox"
                value={isWroking}
                onChange={handleCheckBox}
                class="w-5 h-5 "
              />
              <label class="ms-2 text-lg text-neutral-500">
                I am currently working in this role
              </label>
            </div>
          </div>
          <div className=" pt-2">
            <label className=" text-neutral-500 text-lg">Summary</label>

            <textarea
              name="summary"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              cols="30"
              rows="8"
              className="border border-r-neutral-200 rounded-md p-4 focus:outline-none w-full resize-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
