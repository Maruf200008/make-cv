export default function Footer() {
  return (
    <div>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 mt-[160px] mb-[50px]">
        <div className=" grid lg:grid-cols-5  grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-5 w-full">
          <div className=" col-span-2 sm:col-span-1">
            <h1 className=" text-[25px] font-extrabold text-primary">
              Make CV
            </h1>
          </div>
          <div className=" space-y-4">
            <h1 className=" text-xl font-semibold">Product</h1>
            <ul className=" space-y-3 text-neutral-500">
              <li className=" cursor-pointer hover:text-primary ease-in duration-300">
                Builder
              </li>
              <li className=" cursor-pointer hover:text-primary ease-in duration-300">
                CV Templates
              </li>
              <li className=" cursor-pointer hover:text-primary ease-in duration-300">
                CV Examples
              </li>
              <li className=" cursor-pointer hover:text-primary ease-in duration-300">
                CV Service
              </li>
            </ul>
          </div>
          <div className=" space-y-4">
            <h1 className=" text-xl font-semibold">Career</h1>
            <ul className=" space-y-3 text-neutral-500">
              <li className=" cursor-pointer hover:text-primary ease-in duration-300">
                Career blog
              </li>
              <li className=" cursor-pointer hover:text-primary ease-in duration-300">
                CV
              </li>
              <li className=" cursor-pointer hover:text-primary ease-in duration-300">
                Cover letter
              </li>
              <li className=" cursor-pointer hover:text-primary ease-in duration-300">
                Job interview
              </li>
            </ul>
          </div>
          <div className=" space-y-4">
            <h1 className=" text-xl font-semibold">Company</h1>
            <ul className=" space-y-3 text-neutral-500">
              <li className=" cursor-pointer hover:text-primary ease-in duration-300">
                About us
              </li>
              <li className=" cursor-pointer hover:text-primary ease-in duration-300">
                Pricing
              </li>
              <li className=" cursor-pointer hover:text-primary ease-in duration-300">
                Make CV
              </li>
            </ul>
          </div>
          <div className=" space-y-4">
            <h1 className=" text-xl font-semibold">Support</h1>
            <ul className=" space-y-3 text-neutral-500">
              <li className=" cursor-pointer hover:text-primary ease-in duration-300">
                Contact
              </li>
              <li className=" cursor-pointer hover:text-primary ease-in duration-300">
                FAQ
              </li>
              <li className=" cursor-pointer hover:text-primary ease-in duration-300">
                Terms and conditions
              </li>
              <li className=" cursor-pointer hover:text-primary ease-in duration-300">
                Privacy statement
              </li>
            </ul>
          </div>
        </div>
        <div className=" flex items-center justify-center mt-20 text-center w-full text-neutral-400">
          <p className=" text-center">2023 copyright Mohammad Maruf</p>
        </div>
      </div>
    </div>
  );
}
