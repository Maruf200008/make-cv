"use client";

import { useState } from "react";
import DatePicker from "react-datepicker";
import { IoIosArrowDown } from "react-icons/io";

import { IoIosArrowUp } from "react-icons/io";
import { MdEdit, MdOutlineRefresh } from "react-icons/md";

export default function PersonalDetails() {
  const [title, setTitle] = useState("Personal details");
  const [toggle, setToggle] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
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
      <div>
        <div id="accordion-collapse" data-accordion="collapse">
          <h2 id="accordion-collapse-heading-1">
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
                  <div className=" p-1 rounded-md text-neutral-500 text-xl hover:bg-neutral-200 ease-in duration-300">
                    <MdOutlineRefresh />
                  </div>
                </div>

                <div className=" absolute">
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                </div>
              </div>
              <div className=" space-y-1">
                <label className=" text-neutral-500 text-lg">City</label>
                <input
                  type="text"
                  className=" border border-r-neutral-200 rounded-md p-4 focus:outline-none w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
