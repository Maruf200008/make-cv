import Link from "next/link";

export default function Header() {
  return (
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4  my-5">
      <Link href="/">
        <h1 className=" text-[35px] font-extrabold cursor-pointer">Make CV</h1>
      </Link>
      <div className=" flex items-center gap-10 text-lg text-neutral-600">
        <p className=" cursor-pointer hover:text-primary transition">CV</p>
        <p className=" cursor-pointer hover:text-primary transition">
          Cover Letter
        </p>
        <p className=" cursor-pointer hover:text-primary transition">
          CV Writing Service
        </p>
        <p className=" cursor-pointer hover:text-primary transition">Pricing</p>
        <p className=" cursor-pointer hover:text-primary transition">Blog</p>
      </div>

      <button className=" bg-primary px-5 py-3 rounded-full text-white font-semibold ease-in duration-300 hover:bg-[#da513c]">
        My account
      </button>
    </div>
  );
}
