'use client'
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRef, useState } from "react";
import { HiDownload } from "react-icons/hi";
import CvLeftView from "./CvLeftView";
import CvRightView from "./CvRightView";


export default function PDFView() {
  const [loading, setLoading] = useState(false)
  const pdfRef = useRef(null)

  const handleDownloadPDF = () => {
    setLoading(true)
    const input = pdfRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF('p', 'mm', '04', true);
      const pdfWidth = pdf.internal.pageSize.getWidth()
      const pdfHeigh = pdf.internal.pageSize.getHeight()
      const imgWidth = canvas.width;
      const imgHeigh = canvas.height
      const ratio = Math.min(pdfWidth/imgWidth, pdfHeigh/imgHeigh)
      const imgX = (pdfWidth - imgWidth * ratio) / 2
      const imgY = 30
      pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeigh * ratio)
      pdf.save("CV.pdf")
      setLoading(false)

    })
  }
  return (
    <div className=" w-full flex items-center  relative flex-col gap-10 ">
      <div ref={pdfRef} className=" grid grid-cols-3 w-full  h-[950px] shadow-lg" >
        <div className=" col-span-1  bg-slate-700">
          <CvLeftView />
        </div>
        <div className=" col-span-2 bg-white">
          <CvRightView />
        </div>
      </div>

      <button disabled={loading} onClick={handleDownloadPDF}  className=" flex items-center gap-3 text-white bg-primary px-5 py-3 rounded-full cursor-pointer hover:bg-red-700 ease-in duration-300">
        <h1 className=" text-lg ">Download</h1>
        <div className=" text-2xl">
          <HiDownload />
        </div>
      </button>
    </div>
  );
}
