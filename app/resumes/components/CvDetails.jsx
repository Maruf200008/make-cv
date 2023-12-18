import PersonalDetails from "./PersonalDetails";
import PDFView from "./pdfView/PDFView";

export default function CvDetails() {
  return (
    <div className=" grid grid-cols-2 gap-5">
      <div className=" h-[1000px] overflow-auto ">
        <PersonalDetails />
      </div>
      <div className="  flex p-10 w-full bg-slate-200">
        <PDFView />
      </div>
    </div>
  );
}
