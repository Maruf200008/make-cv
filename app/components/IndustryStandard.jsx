import Image from "next/image";
import builderDesktop from "../images/builderDesktop.webp";
import tick from "../images/tick.png";
export default function IndustryStandard() {
  return (
    <div>
      <div className=" flex gap-[60px] justify-between ">
        <div className=" space-y-7 w-[30%]">
          <h1 className=" text-[60px] font-extrabold leading-[70px]">
            The industry standard CV builder
          </h1>
          <p className=" text-neutral-600">
            Our online CV builder makes it easy for anyone to create a
            professional CV in a matter of minutes. Select your desired template
            and begin filling in your professional and career content. It is
            really that easy.
          </p>
          <div className=" space-y-4">
            <div className=" flex gap-3">
              <div>
                <Image src={tick} alt="tick" width={20} />
              </div>
              <div className=" text-neutral-600">Easy to use on any device</div>
            </div>
            <div className=" flex gap-3">
              <div>
                <Image src={tick} alt="tick" width={20} />
              </div>
              <div className=" text-neutral-600">
                Integrated spelling and grammar check
              </div>
            </div>
            <div className=" flex gap-3">
              <div>
                <Image src={tick} alt="tick" width={25} />
              </div>
              <div className=" text-neutral-600">
                Watch your CV come to life with our interactive CV builder
              </div>
            </div>
          </div>
        </div>
        <div className=" col-span-2  ">
          <Image src={builderDesktop} alt="builderDesktop" />
        </div>
      </div>
    </div>
  );
}
