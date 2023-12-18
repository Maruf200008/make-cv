"use client";

import { useState } from "react";

import { IoIosArrowDown } from "react-icons/io";

import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarDays } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";

import { MdOutlineRefresh } from "react-icons/md";

export default function AdditionalFields() {
  const [toggle, setToggle] = useState(false);
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [postalcode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [drivingLicenses, setDrivingLicenses] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [placeOfBirth, setPlaceOfBirth] = useState("");
  const [nationality, setNationality] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [personalWebsite, setPersonalWebsite] = useState("");

  return (
    <div>
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
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  type="text"
                  className=" border border-r-neutral-200 rounded-md p-4 focus:outline-none w-full"
                />
              </div>
              <div className=" space-y-1">
                <label className=" text-neutral-500 text-lg">Address</label>
                <input
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  type="text"
                  className=" border border-r-neutral-200 rounded-md p-4 focus:outline-none w-full"
                />
              </div>
            </div>
            <div className="  grid grid-cols-2 gap-4 ">
              <div className=" space-y-1">
                <label className=" text-neutral-500 text-lg">Postal code</label>
                <input
                  value={postalcode}
                  onChange={(e) => setPostalCode(e.target.value)}
                  type="text"
                  className=" border border-r-neutral-200 rounded-md p-4 focus:outline-none w-full"
                />
              </div>
              <div className=" space-y-1">
                <label className=" text-neutral-500 text-lg">City</label>
                <input
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
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
                  value={drivingLicenses}
                  onChange={(e) => setDrivingLicenses(e.target.value)}
                  type="text"
                  className=" border border-r-neutral-200 rounded-md p-4 focus:outline-none w-full"
                />
              </div>
              <div className=" space-y-1">
                <label className=" text-neutral-500 text-lg">Gender</label>
                <select className="border border-r-neutral-200 rounded-md p-4 focus:outline-none w-full">
                  <option value="Male" onChange={() => setGender("Male")}>
                    Male
                  </option>
                  <option value="Female" onChange={() => setGender("Female")}>
                    Female
                  </option>
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
                    onClick={() => setDateOfBirth(null)}
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
                        selected={dateOfBirth}
                        onChange={(date) => setDateOfBirth(date)}
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
                  value={placeOfBirth}
                  onChange={(e) => setPlaceOfBirth(e.target.value)}
                  className=" border border-r-neutral-200 rounded-md p-4 focus:outline-none w-full"
                />
              </div>
            </div>
            <div className="  grid grid-cols-2 gap-4 ">
              <div className=" space-y-1">
                <label className=" text-neutral-500 text-lg">Nationality</label>
                <input
                  value={nationality}
                  onChange={(e) => setNationality(e.target.value)}
                  type="text"
                  className=" border border-r-neutral-200 rounded-md p-4 focus:outline-none w-full"
                />
              </div>
              <div className=" space-y-1">
                <label className=" text-neutral-500 text-lg">
                  Marital Status
                </label>
                <select className="border border-r-neutral-200 rounded-md p-4 focus:outline-none w-full">
                  <option
                    value="Unmarried"
                    onChange={() => setMaritalStatus("Unmarried")}
                  >
                    Unmarried
                  </option>
                  <option
                    value="Living together"
                    onChange={() => setMaritalStatus("Living together")}
                  >
                    Living together
                  </option>
                  <option
                    value="Married"
                    onChange={() => setMaritalStatus("Married")}
                  >
                    Married
                  </option>
                  <option
                    value="Divorced"
                    onChange={() => setMaritalStatus("Divorced")}
                  >
                    Divorced
                  </option>
                  <option
                    value="Widowhood"
                    onChange={() => setMaritalStatus("Widowhood")}
                  >
                    Widowhood
                  </option>
                </select>
              </div>
            </div>
            <div className="  grid grid-cols-2 gap-4 ">
              <div className=" space-y-1">
                <label className=" text-neutral-500 text-lg">Linkedin</label>
                <input
                  value={linkedin}
                  onChange={(e) => setLinkedin(e.target.value)}
                  type="text"
                  className=" border border-r-neutral-200 rounded-md p-4 focus:outline-none w-full"
                />
              </div>
              <div className=" space-y-1">
                <label className=" text-neutral-500 text-lg">
                  Personal website
                </label>
                <input
                  value={personalWebsite}
                  onChange={(e) => setPersonalWebsite(e.target.value)}
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
