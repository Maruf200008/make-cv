"use client";

import { useState } from "react";

import { IoIosArrowDown } from "react-icons/io";

import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarDays } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";

import { MdEdit, MdOutlineRefresh } from "react-icons/md";
import AddSkills from "./cvDetails/AddSkills";

export default function PersonalDetails() {
  const [title, setTitle] = useState("Personal details");
  const [toggle, setToggle] = useState(false);
  const [personalProfileTitle, setPersonalProfileTitle] =
    useState("Personal profile");
  const [selectDate, setSelectDate] = useState(null);

  console.log(selectDate);
  return (
    <div className=" space-y-3">
      <div className=" flex items-center gap-1 ">
        <input
          type="text"
          placeholder="Personal Details"
          className=" focus:outline-none text-[25px] font-extrabold py-2 w-[220px]"
          onChange={(e) => setTitle(e.target.value)}
          width={20}
          value={title}
        />
        <div className=" text-[25px] text-neutral-500">
          <MdEdit />
        </div>
      </div>
      <div className="  grid grid-cols-2 gap-4 ">
        <div className=" space-y-1">
          <label className=" text-neutral-500 text-lg">First name</label>
          <input
            type="text"
            className=" border border-r-neutral-200 rounded-md p-4 focus:outline-none w-full"
          />
        </div>
        <div className=" space-y-1">
          <label className=" text-neutral-500 text-lg">Last name</label>
          <input
            type="text"
            className=" border border-r-neutral-200 rounded-md p-4 focus:outline-none w-full"
          />
        </div>
      </div>
      <div className=" space-y-1">
        <div className=" flex gap-4 items-center cursor-pointer">
          <label className=" text-neutral-500 text-lg">Photo</label>
          <div className=" p-1 rounded-md text-neutral-500 text-xl hover:bg-neutral-200 ease-in duration-300">
            <MdOutlineRefresh />
          </div>
        </div>

        <div className="border  border-r-neutral-200 rounded-md p-4 w-full">
          <label for="dropzone-file" className=" flex items-center gap-5">
            <div className=" w-[35px] border border-neutral-300 h-[35px] bg-neutral-200 rounded-full" />
            <p className=" text-neutral-500">
              <span className=" font-semibold">Choose a file</span> or drag it
              here
            </p>
          </label>
          <input
            id="dropzone-file"
            type="file"
            placeholder="dsfasdfasd"
            className=" hidden"
          />
        </div>
      </div>
      <div className=" space-y-1">
        <label className=" text-neutral-500 text-lg">Email address</label>
        <input
          type="text"
          className=" border border-r-neutral-200 rounded-md p-4 focus:outline-none w-full"
        />
      </div>
      <div className=" space-y-1">
        <label className=" text-neutral-500 text-lg">Position</label>
        <input
          placeholder="e.g. Service Designer"
          type="text"
          className=" border border-r-neutral-200 rounded-md p-4 focus:outline-none w-full"
        />
      </div>
      <div className=" border-b pb-5">
        <div>
          <h2>
            <button
              type="button"
              onClick={() => setToggle(!toggle)}
              className="flex items-center text-primary font-semibold gap-3 hover:underline "
            >
              <span>Show Additional Fields</span>
              <div>{toggle ? <IoIosArrowUp /> : <IoIosArrowDown />}</div>
            </button>
          </h2>
          <div className={toggle ? "mt-5 space-y-3" : " hidden"}>
            <div className="  grid grid-cols-2 gap-4 ">
              <div className=" space-y-1">
                <label className=" text-neutral-500 text-lg">
                  Phone number
                </label>
                <input
                  type="text"
                  className=" border border-r-neutral-200 rounded-md p-4 focus:outline-none w-full"
                />
              </div>
              <div className=" space-y-1">
                <label className=" text-neutral-500 text-lg">Address</label>
                <input
                  type="text"
                  className=" border border-r-neutral-200 rounded-md p-4 focus:outline-none w-full"
                />
              </div>
            </div>
            <div className="  grid grid-cols-2 gap-4 ">
              <div className=" space-y-1">
                <label className=" text-neutral-500 text-lg">Postal code</label>
                <input
                  type="text"
                  className=" border border-r-neutral-200 rounded-md p-4 focus:outline-none w-full"
                />
              </div>
              <div className=" space-y-1">
                <label className=" text-neutral-500 text-lg">City</label>
                <input
                  type="text"
                  className=" border border-r-neutral-200 rounded-md p-4 focus:outline-none w-full"
                />
              </div>
            </div>
            <div className="  grid grid-cols-2 gap-4 ">
              <div className=" space-y-1">
                <label className=" text-neutral-500 text-lg">
                  Driving licenses
                </label>
                <input
                  type="text"
                  className=" border border-r-neutral-200 rounded-md p-4 focus:outline-none w-full"
                />
              </div>
              <div className=" space-y-1">
                <label className=" text-neutral-500 text-lg">Gender</label>
                <select className="border border-r-neutral-200 rounded-md p-4 focus:outline-none w-full">
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>
            <div className="  grid grid-cols-2 gap-4 ">
              <div className=" space-y-1">
                <div className=" flex gap-4 items-center cursor-pointer">
                  <label className=" text-neutral-500 text-lg">
                    Date of birth
                  </label>
                  <div
                    onClick={() => setSelectDate(null)}
                    className=" p-1 rounded-md text-neutral-500 text-xl hover:bg-neutral-200 ease-in duration-300"
                  >
                    <MdOutlineRefresh />
                  </div>
                </div>
                <div className="border border-r-neutral-200 rounded-md p-4 focus:outline-none w-full ">
                  <label className="flex items-center justify-between">
                    <div>
                      <ReactDatePicker
                        className=" focus:outline-none"
                        selected={selectDate}
                        onChange={(date) => setSelectDate(date)}
                      />
                    </div>
                    <div className=" text-neutral-600">
                      <FaCalendarDays />
                    </div>
                  </label>
                </div>
                <div className=" absolute"></div>
              </div>
              <div className=" space-y-1">
                <label className=" text-neutral-500 text-lg">
                  Place of birth
                </label>
                <input
                  type="text"
                  className=" border border-r-neutral-200 rounded-md p-4 focus:outline-none w-full"
                />
              </div>
            </div>
            <div className="  grid grid-cols-2 gap-4 ">
              <div className=" space-y-1">
                <label className=" text-neutral-500 text-lg">Nationality</label>
                <input
                  type="text"
                  className=" border border-r-neutral-200 rounded-md p-4 focus:outline-none w-full"
                />
              </div>
              <div className=" space-y-1">
                <label className=" text-neutral-500 text-lg">
                  Marital Status
                </label>
                <select className="border border-r-neutral-200 rounded-md p-4 focus:outline-none w-full">
                  <option value="Unmarried">Unmarried</option>
                  <option value="Living together">Living together</option>
                  <option value="Married">Married</option>
                  <option value="Divorced">Divorced</option>
                  <option value="Widowhood">Widowhood</option>
                </select>
              </div>
            </div>
            <div className="  grid grid-cols-2 gap-4 ">
              <div className=" space-y-1">
                <label className=" text-neutral-500 text-lg">Linkedin</label>
                <input
                  type="text"
                  className=" border border-r-neutral-200 rounded-md p-4 focus:outline-none w-full"
                />
              </div>
              <div className=" space-y-1">
                <label className=" text-neutral-500 text-lg">
                  Personal website
                </label>
                <input
                  type="text"
                  className=" border border-r-neutral-200 rounded-md p-4 focus:outline-none w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-7 border-b pb-5">
        <div className=" flex items-center gap-1 ">
          <input
            type="text"
            placeholder="Personal profile"
            className=" focus:outline-none text-[20px] font-semibold py-2 w-[180px]"
            onChange={(e) => setPersonalProfileTitle(e.target.value)}
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
            name="asdfas"
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </div>
      </div>
      <AddSkills />
    </div>
  );
}
