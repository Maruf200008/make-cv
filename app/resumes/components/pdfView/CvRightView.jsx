import { GoDot } from "react-icons/go";
import { MdOutlineWork } from "react-icons/md";
import { RiGraduationCapFill } from "react-icons/ri";

export default function CvRightView() {
  const worExperinceData = [
    {
      id: 1,
      date: "Mar 2020 - Present",
      workPosition: "Graph Designer",
      companyName: "Computer Zone, Chandpur",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
  ];

  const educationData = [
    {
      id: 1,
      date: "Mar 2020 - Present",
      degree: "HSC",
      institution: "Al-Amin Academy School & College",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
  ];

  return (
    <div className="p-4">
      <div className=" space-y-3">
        <h1 className=" text-xl uppercase font-medium text-gray-700">
          Mohammad Maruf
        </h1>
        <p className=" text-[10px] border-b pb-4 text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        {/* work Experience */}
        <div className=" space-y-3 border-b pb-4 text-gray-600">
          <div className=" flex items-center gap-3 text-gray-600">
            <div className=" border p-1.5 border-gray-600 rounded-full">
              <MdOutlineWork />
            </div>
            <h1 className=" text-gray-700 font-medium uppercase">
              Work Experience
            </h1>
          </div>
          {worExperinceData.map((work) => (
            <div
              key={work?.id}
              className=" grid grid-cols-5 text-[11px] text-gray-600"
            >
              <div className=" flex gap-1 text-[12px] col-span-2    ">
                <div className=" mt-[2px]">
                  <GoDot />
                </div>

                <div>{work?.date}</div>
              </div>
              <div className=" col-span-3 ">
                <h1 className=" font-bold">{work?.workPosition}</h1>
                <p>{work?.companyName}</p>
                <div className=" pt-2">
                  <p>{work?.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Education */}
        <div className=" space-y-3 text-gray-600">
          <div className=" flex items-center gap-3 text-gray-600">
            <div className=" border p-1.5 border-gray-600 rounded-full">
              <RiGraduationCapFill />
            </div>
            <h1 className=" text-gray-700 font-medium uppercase">Education</h1>
          </div>
          {educationData.map((eduction) => (
            <div
              key={eduction?.id}
              className=" grid grid-cols-5 text-[11px]  text-gray-600"
            >
              <div className=" flex gap-1 text-[12px] col-span-2    ">
                <div className="mt-[2px]">
                  <GoDot />
                </div>

                <div>{eduction?.date}</div>
              </div>
              <div className=" col-span-3 ">
                <h1 className=" font-bold">{eduction?.degree}</h1>
                <p>{eduction?.institution}</p>
                <div className=" pt-2">
                  <p>{eduction?.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
