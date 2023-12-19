"use client";

import { useState } from "react";

import { IoIosArrowDown } from "react-icons/io";

import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarDays } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";

import useResumeStore from "@/app/store/useResumesStore";
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

  const {
    updatePhone,
    updateAddress,
    updatePostalCode,
    updateCity,
    updateDrvingLicenses,
    updateGender,
    updateDateOfBirth,
    updatePlaceOfBirth,
    updateNationality,
    updateMaritalStatus,
    updatelinkedin,
    updatePersonalWebsite,
  } = useResumeStore((state) => state);

  const handlePhoneNumber = (e) => {
    setPhone(e.target.value);
    updatePhone(e.target.value);
  };

  const handlePostalcode = (e) => {
    setPostalCode(e.target.value);
    updatePostalCode(e.target.value);
  };

  const handleAddress = (e) => {
    setAddress(e.target.value);
    updateAddress(e.target.value);
  };

  const handleCity = (e) => {
    setCity(e.target.value);
    updateCity(e.target.value);
  };

  const handleDrivingLicenses = (e) => {
    setDrivingLicenses(e.target.value);
    updateDrvingLicenses(e.target.value);
  };
  const handleGender = (value) => {
    setGender(value);
    console.log(value)
    updateGender(value);
  };
  const handleDateofBirth = (date) => {
    setDateOfBirth(date);
    const formattedDate = new Date(date).toLocaleDateString("en-GB");
    updateDateOfBirth(formattedDate);
  };

  const handleRemoveDateofBirth = () => {
    setDateOfBirth(null);
    updateDateOfBirth("");
  };
  const handlePlaceofBirth = (e) => {
    setPlaceOfBirth(e.target.value);
    updatePlaceOfBirth(e.target.value);
  };
  const handleNationality = (e) => {
    setNationality(e.target.value);
    updateNationality(e.target.value);
  };
  const handleMaritalStatus = (status) => {
    setMaritalStatus(status);
    updateMaritalStatus(status);
  };
  const handleLinkedin = (e) => {
    setLinkedin(e.target.value);
    updatelinkedin(e.target.value);
  };
  const handlePersonalWebsite = (e) => {
    setPersonalWebsite(e.target.value);
    updatePersonalWebsite(e.target.value);
  };

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
            {/* Phone number */}
            <div className="  grid grid-cols-2 gap-4 ">
              <div className=" space-y-1">
                <label className=" text-neutral-500 text-lg">
                  Phone number
                </label>
                <input
                  value={phone}
                  onChange={handlePhoneNumber}
                  type="text"
                  className=" border border-r-neutral-200 rounded-md p-4 focus:outline-none w-full"
                />
              </div>
              <div className=" space-y-1">
                <label className=" text-neutral-500 text-lg">Address</label>
                <input
                  value={address}
                  onChange={handleAddress}
                  type="text"
                  className=" border border-r-neutral-200 rounded-md p-4 focus:outline-none w-full"
                />
              </div>
            </div>
            {/* Postal code */}
            <div className="  grid grid-cols-2 gap-4 ">
              <div className=" space-y-1">
                <label className=" text-neutral-500 text-lg">Postal code</label>
                <input
                  value={postalcode}
                  onChange={handlePostalcode}
                  type="text"
                  className=" border border-r-neutral-200 rounded-md p-4 focus:outline-none w-full"
                />
              </div>
              <div className=" space-y-1">
                <label className=" text-neutral-500 text-lg">City</label>
                <input
                  value={city}
                  onChange={handleCity}
                  type="text"
                  className=" border border-r-neutral-200 rounded-md p-4 focus:outline-none w-full"
                />
              </div>
            </div>
            {/* Driving licenses */}
            <div className="  grid grid-cols-2 gap-4 ">
              <div className=" space-y-1">
                <label className=" text-neutral-500 text-lg">
                  Driving licenses
                </label>
                <input
                  value={drivingLicenses}
                  onChange={handleDrivingLicenses}
                  type="text"
                  className=" border border-r-neutral-200 rounded-md p-4 focus:outline-none w-full"
                />
              </div>
              <div className=" space-y-1">
                <label className=" text-neutral-500 text-lg">Gender</label>
                <select className="border border-r-neutral-200 rounded-md p-4 focus:outline-none w-full">
                  <option value="Male" onChange={() => handleGender("Male")}>
                    Male
                  </option>
                  <option
                    value="Female"
                    onChange={() => handleGender("Female")}
                  >
                    Female
                  </option>
                </select>
              </div>
            </div>
            {/* Date of birth */}
            <div className="  grid grid-cols-2 gap-4 ">
              <div className=" space-y-1">
                <div className=" flex gap-4 items-center cursor-pointer">
                  <label className=" text-neutral-500 text-lg">
                    Date of birth
                  </label>
                  <div
                    onClick={() => handleRemoveDateofBirth()}
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
                        onChange={(date) => handleDateofBirth(date)}
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
                  onChange={handlePlaceofBirth}
                  className=" border border-r-neutral-200 rounded-md p-4 focus:outline-none w-full"
                />
              </div>
            </div>
            {/* Nationality */}
            <div className="  grid grid-cols-2 gap-4 ">
              <div className=" space-y-1">
                <label className=" text-neutral-500 text-lg">Nationality</label>
                <input
                  value={nationality}
                  onChange={handleNationality}
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
                    onChange={() => handleMaritalStatus("Unmarried")}
                  >
                    Unmarried
                  </option>
                  <option
                    value="Living together"
                    onChange={() => handleMaritalStatus("Living together")}
                  >
                    Living together
                  </option>
                  <option
                    value="Married"
                    onChange={() => handleMaritalStatus("Married")}
                  >
                    Married
                  </option>
                  <option
                    value="Divorced"
                    onChange={() => handleMaritalStatus("Divorced")}
                  >
                    Divorced
                  </option>
                  <option
                    value="Widowhood"
                    onChange={() => handleMaritalStatus("Widowhood")}
                  >
                    Widowhood
                  </option>
                </select>
              </div>
            </div>
            <div className="  grid grid-cols-2 gap-4 ">
              {/* Linkedin */}
              <div className=" space-y-1">
                <label className=" text-neutral-500 text-lg">Linkedin</label>
                <input
                  value={linkedin}
                  onChange={handleLinkedin}
                  type="text"
                  className=" border border-r-neutral-200 rounded-md p-4 focus:outline-none w-full"
                />
              </div>
              {/* Personal website */}
              <div className=" space-y-1">
                <label className=" text-neutral-500 text-lg">
                  Personal website
                </label>
                <input
                  value={personalWebsite}
                  onChange={handlePersonalWebsite}
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
