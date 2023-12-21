"use client";
import useResumeStore from "@/app/store/useResumesStore";
import { GoDot } from "react-icons/go";
import { MdOutlineWork } from "react-icons/md";
import { RiGraduationCapFill } from "react-icons/ri";

export default function CvRightView() {
  const resumeData = useResumeStore((state) => state.resumeData);
  const {
    firstName,
    lastName,
    workExperience,
    personalProfile,
    education,
    educationHeading,
    workExperienceHeading,
  } = resumeData || {};

  return (
    <div className="p-4">
      <div className=" space-y-3">
        {firstName || lastName ? (
          <h1 className=" text-xl uppercase font-medium text-gray-700">
            {firstName && !lastName ? firstName : firstName + " " + lastName}
          </h1>
        ) : null}
        {personalProfile && (
          <p className=" text-[10px] border-b pb-4 text-gray-600">
            {personalProfile}
          </p>
        )}
        {/* work Experience */}
        <div
          className={
            workExperience && workExperience.length > 0
              ? "space-y-3 border-b pb-4 text-gray-600"
              : null
          }
        >
          <div className=" flex items-center gap-3 text-gray-600">
            {" "}
            {workExperience && workExperience.length > 0 && (
              <>
                <div className=" border p-1.5 border-gray-600 rounded-full">
                  <MdOutlineWork />
                </div>

                <h1 className=" text-gray-700 font-medium uppercase">
                  {workExperienceHeading
                    ? workExperienceHeading
                    : "Work Experience"}
                </h1>
              </>
            )}
          </div>
          {workExperience.map((experience) => {
            const {
              company,
              endDate,
              id,
              jobTitle,
              location,
              startDate,
              summary,
            } = experience;
            return (
              <div
                key={id}
                className=" grid grid-cols-5 text-[11px] text-gray-600 "
              >
                <div className=" flex gap-2 text-[10px] col-span-2     ">
                  {startDate && endDate && (
                    <>
                      <div className=" mt-[2px]">
                        <GoDot />
                      </div>

                      <div>{`${startDate} - ${endDate}`}</div>
                    </>
                  )}
                </div>
                <div className=" col-span-3 ">
                  <h1 className=" font-bold text-[13px]">{jobTitle}</h1>
                  <p>{`${company}, ${location}`}</p>
                  <div className=" pt-2 ">
                    <p>{summary}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* Education */}
        <div className=" space-y-3 text-gray-600">
          {(education && education.length > 0) || educationHeading ? (
            <div className=" flex items-center gap-3 text-gray-600">
              <div className=" border p-1.5 border-gray-600 rounded-full">
                <RiGraduationCapFill />
              </div>
              <h1 className=" text-gray-700 font-medium uppercase">
                {educationHeading ? educationHeading : "Education"}
              </h1>
            </div>
          ) : null}
          {education &&
            education.map((eductionDate) => {
              const {
                id,
                institution,
                degree,
                loaction,
                startDate,
                endDate,
                summary,
              } = eductionDate;
              return (
                <div
                  key={id}
                  className=" grid grid-cols-5 text-[11px]  text-gray-600"
                >
                  {startDate && endDate && (
                    <>
                      <div className=" flex gap-1 text-[12px] col-span-2    ">
                        <div className="mt-[2px]">
                          <GoDot />
                        </div>

                        <div className="text-[10px]">{`${startDate} - ${endDate}`}</div>
                      </div>
                    </>
                  )}
                  <div className=" col-span-3 ">
                    <h1 className=" font-bold">{degree}</h1>
                    {institution || loaction ? (
                      <p>
                        {institution && !loaction
                          ? institution
                          : !institution && loaction
                          ? loaction
                          : `${institution}, ${loaction}`}
                      </p>
                    ) : null}
                    <div className=" pt-2">
                      <p>{summary}</p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
