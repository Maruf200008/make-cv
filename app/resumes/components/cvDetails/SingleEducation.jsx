"use client";
import { useState } from "react";
import { IoDocumentOutline } from "react-icons/io5";
import { RiDeleteBinLine } from "react-icons/ri";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import useResumeStore from "@/app/store/useResumesStore";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarDays } from "react-icons/fa6";

export default function SingleEducation({ id }) {
  const [skillToggle, setSkillToggle] = useState(true);
  const [institution, setInstitution] = useState("Untitled");
  const [degree, setDegree] = useState("");
  const [location, setLoaction] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endStringDate, setendStringDate] = useState("");
  const [startStringDate, setStartStringDate] = useState("");
  const [endDate, setEndDate] = useState(null);
  const [isWroking, setIsWorking] = useState(false);
  const [summary, setSummary] = useState("");

  const {
    deleteEducation,
    UpdateInstitution,
    UpdateDegree,
    UpdateLoaction,
    UpdateStarDate,
    UpdateEndDate,
    UpdateSummary,
  } = useResumeStore((state) => state);

  const handleStartDate = (date) => {
    setStartDate(date);
    const formattedDate = new Date(date).toLocaleDateString("en-GB");
    setStartStringDate(formattedDate);
    UpdateStarDate({ id, startDate: formattedDate });
  };

  const handleEndDate = (date) => {
    setEndDate(date);
    const formattedDate = new Date(date).toLocaleDateString("en-GB");
    setendStringDate(formattedDate);
    UpdateEndDate({ id, endDate: formattedDate });
  };

  const handleCheckBox = () => {
    if (!isWroking) {
      setIsWorking(!isWroking);
      setendStringDate("Present");
      UpdateEndDate({ id, endDate: "Present" });
    } else {
      setIsWorking(!isWroking);
      const formattedDate = new Date(endDate).toLocaleDateString("en-GB");
      if (endDate) {
        setendStringDate(formattedDate);
        UpdateEndDate({ id, endDate: formattedDate });
      } else {
        setendStringDate(" ");
        UpdateEndDate({ id, endDate: " " });
      }
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
            <div>
              <p className="focus:outline-none font-semibold text-lg text-neutral-500">
                {institution !== "" ? institution : "Untitled"}
              </p>
              {startStringDate && endStringDate && (
                <p className=" text-sm text-neutral-500">{`${startStringDate} - ${endStringDate}`}</p>
              )}
            </div>
          </div>
          <div className="  flex items-center gap-3">
            <div
              className=" text-xl cursor-pointer"
              onClick={() => setSkillToggle(!skillToggle)}
            >
              {!skillToggle ? <IoIosArrowDown /> : <IoIosArrowUp />}
            </div>
            <div
              onClick={() => {
                deleteEducation(id);
              }}
              className=" text-xl cursor-pointer hover:bg-neutral-100 p-2 rounded-full ease-in duration-300"
            >
              <RiDeleteBinLine />
            </div>
          </div>
        </div>
        <div className={skillToggle ? "space-y-3 my-3" : "hidden"}>
          <div className=" flex items-center gap-4">
            {/* Institution */}
            <div>
              <label className=" text-neutral-500 text-lg">Institution</label>
              <input
                type="text"
                onChange={(e) => {
                  setInstitution(e.target.value);
                  UpdateInstitution({ id, institution: e.target.value });
                }}
                className=" border border-r-neutral-200 rounded-md p-4 focus:outline-none w-full"
              />
            </div>
            {/* Degree */}
            <div>
              <label className=" text-neutral-500 text-lg">Degree</label>
              <input
                type="text"
                value={degree}
                onChange={(e) => {
                  setDegree(e.target.value);
                  UpdateDegree({ id, degree: e.target.value });
                }}
                className=" border border-r-neutral-200 rounded-md p-4 focus:outline-none w-full"
              />
            </div>
          </div>
          {/* Loaction */}
          <div>
            <label className=" text-neutral-500 text-lg">Loaction</label>
            <input
              type="text"
              value={location}
              onChange={(e) => {
                setLoaction(e.target.value);
                UpdateLoaction({ id, loaction: e.target.value });
              }}
              className=" border border-r-neutral-200 rounded-md p-4 focus:outline-none w-full"
            />
          </div>
          {/* Date */}
          <div>
            <div className=" flex items-center gap-4">
              <div className="flex items-center  gap-1  w-full">
                {/* Star Date */}
                <div className=" space-y-1 w-full">
                  <div className=" cursor-pointer">
                    <label className=" text-neutral-500 text-lg">
                      Star Date
                    </label>
                  </div>
                  <div className="border border-r-neutral-200 rounded-md p-4 focus:outline-none w-full ">
                    <label className="flex items-center justify-between">
                      <div>
                        <ReactDatePicker
                          className=" focus:outline-none"
                          selected={startDate}
                          onChange={(date) => handleStartDate(date)}
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
                {/* End Date */}
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
                            onChange={(date) => handleEndDate(date)}
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
            {/* checkbox */}
            <div class="flex items-center mt-3">
              <input
                type="checkbox"
                value={isWroking}
                onChange={handleCheckBox}
                class="w-5 h-5 "
              />
              <label class="ms-2 text-lg text-neutral-500">
                I am currently studying here
              </label>
            </div>
          </div>
          {/* Summary */}
          <div className=" pt-2">
            <label className=" text-neutral-500 text-lg">Summary</label>
            <textarea
              name="summary"
              value={summary}
              onChange={(e) => {
                setSummary(e.target.value);
                UpdateSummary({ id, summary: e.target.value });
              }}
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
