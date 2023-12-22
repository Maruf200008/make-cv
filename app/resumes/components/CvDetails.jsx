import PersonalDetails from "./PersonalDetails";
import PDFView from "./pdfView/PDFView";

export default function CvDetails() {
  return (
    <div className=" grid lg:grid-cols-2 gap-5">
      <div className=" h-[1000px] overflow-auto ">
        <PersonalDetails />
      </div>
      <div className="  flex pl-5 w-full">
        <PDFView />
      </div>
    </div>
  );
}
