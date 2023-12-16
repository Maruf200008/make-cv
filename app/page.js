import ChooseTemplates from "./components/ChooseTemplates";
import HeroSection from "./components/HeroSection";
import Strengthen from "./components/Strengthen";
import SuccessStory from "./components/SuccessStory";

export default function Home() {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto p-4  my-5">
        <HeroSection />
        <SuccessStory />
      </div>
      <div className=" bg-neutral-100">
        <div className="max-w-screen-xl mx-auto py-[100px]  my-5">
          <Strengthen />
        </div>
      </div>
      <div className=" bg-black">
        <div className="max-w-screen-xl mx-auto p-4  my-5">
          <ChooseTemplates />
        </div>
      </div>
    </div>
  );
}
