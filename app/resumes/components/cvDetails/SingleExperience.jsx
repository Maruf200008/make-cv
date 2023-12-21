"use client";
import { useState } from "react";
import { IoDocumentOutline } from "react-icons/io5";
import { RiDeleteBinLine } from "react-icons/ri";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import useResumeStore from "@/app/store/useResumesStore";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarDays } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";

export default function SingleExperience({ id }) {
  const [skillToggle, setSkillToggle] = useState(true);
  const [jobTitle, setJobTitle] = useState("Untitled");
  const [company, setCompany] = useState("");
  const [location, setLoaction] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [startStringDate, setStartStringDate] = useState("");
  const [endDate, setEndDate] = useState(null);
  const [endStringDate, setendStringDate] = useState("");
  const [isWroking, setIsWorking] = useState(false);
  const [summary, setSummary] = useState("");

  const handleCheckBox = () => {
    if (!isWroking) {
      setIsWorking(!isWroking);
      setendStringDate("Present");
      UpdateEndDate({ id: id, endDate: "Present" });
    } else {
      setIsWorking(!isWroking);
      const formattedDate = new Date(endDate).toLocaleDateString("en-GB");
      if (endDate) {
        setendStringDate(formattedDate);
        UpdateEndDate({ id: id, endDate: formattedDate });
      } else {
        setendStringDate(" ");
        UpdateEndDate({ id: id, endDate: " " });
      }
    }
  };

  const handleStartDate = (date) => {
    setStartDate(date);
    const formattedDate = new Date(date).toLocaleDateString("en-GB");
    setStartStringDate(formattedDate);
    UpdateStartDate({ id: id, startDate: formattedDate });
  };

  const handleEndDate = (date) => {
    setEndDate(date);
    const formattedDate = new Date(date).toLocaleDateString("en-GB");
    setendStringDate(formattedDate);
    UpdateEndDate({ id: id, endDate: formattedDate });
  };

  const {
    deleteExperince,
    UpdateJobTitle,
    UpdateCompany,
    UpdateLocation,
    UpdateStartDate,
    UpdateEndDate,
    UpdateSummary,
  } = useResumeStore((state) => state);

  return (
    <div>
      <div>
        <div className=" flex items-center justify-between">
          <div
            onClick={() => setSkillToggle(!skillToggle)}
            className=" flex items-center gap-4 mt-5 cursor-pointer group"
          >
            {jobTitle && company && location && startDate ? (
              <div className=" text-2xl bg-black text-white p-2 rounded-full">
                <TiTick />
              </div>
            ) : (
              <div className=" text-2xl bg-neutral-100 p-2 rounded-full group-hover:bg-neutral-200 ease-in duration-300">
                <IoDocumentOutline />
              </div>
            )}
            <div>
              <p className="focus:outline-none font-semibold text-lg text-neutral-500">
                {jobTitle || company !== ""
                  ? jobTitle && !company
                    ? jobTitle
                    : !jobTitle && company
                    ? company
                    : `${jobTitle} at ${company}`
                  : "Untitled"}
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
              onClick={() => deleteExperince(id)}
              className=" text-xl cursor-pointer hover:bg-neutral-100 p-2 rounded-full ease-in duration-300"
            >
              <RiDeleteBinLine />
            </div>
          </div>
        </div>
        <div className={skillToggle ? "space-y-3 my-3" : "hidden"}>
          <div className=" flex items-center gap-4">
            {/* Job Title */}
            <div>
              <label className=" text-neutral-500 text-lg">Job Title</label>
              <input
                type="text"
                onChange={(e) => {
                  setJobTitle(e.target.value);
                  UpdateJobTitle({ id: id, title: e.target.value });
                }}
                className=" border border-r-neutral-200 rounded-md p-4 focus:outline-none w-full"
              />
            </div>
            {/* Company */}
            <div>
              <label className=" text-neutral-500 text-lg">Company</label>
              <input
                type="text"
                value={company}
                onChange={(e) => {
                  setCompany(e.target.value);
                  UpdateCompany({ id: id, company: e.target.value });
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
                UpdateLocation({ id: id, location: e.target.value });
              }}
              className=" border border-r-neutral-200 rounded-md p-4 focus:outline-none w-full"
            />
          </div>
          {/* Date */}
          <div>
            <div className=" flex items-center gap-4">
              <div className=" flex items-center  gap-1  w-full">
                {/* Start Date */}
                <div className=" space-y-1 w-full">
                  <div className=" cursor-pointer">
                    <label className=" text-neutral-500 text-lg">
                      Start Date
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
            {/* working checkbox */}
            <div className="flex items-center mt-3">
              <input
                type="checkbox"
                value={isWroking}
                onChange={handleCheckBox}
                className="w-5 h-5 cursor-pointer "
              />
              <label className="ms-2 text-lg text-neutral-500">
                I am currently working in this role
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
                UpdateSummary({ id: id, summary: e.target.value });
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
