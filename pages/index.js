import GroupComponent from "../components/group-component";
import LogoBarWrapper from "../components/logo-bar-wrapper";
import FrameComponent5 from "../components/frame-component";
import Footer from "../components/footer";
import Projects from "../components/projects";
import FrameComponent2 from "../components/frame-component2";
import Discuss from "../components/Discuss";
import Application from "../components/Application";
import OurTeam from "../components/OurTeam";
import Faq from "../components/Faq";
import UserCentric from "../components/UserCentric";

const Desktop = () => {
  return (
    <div className="w-full relative bg-white h-[5680px] overflow-hidden text-left text-20xl text-orange-100 font-inter">
      <UserCentric />
      <GroupComponent />
      <div className="absolute top-[1593px] left-[0px] flex flex-col items-center justify-start text-17xl text-gray-200 m-7">
        <div className="flex flex-col items-start justify-start">

          <div className=" w-full relative bg-whitesmoke  shrink-0">
            <Projects />

            <FrameComponent2 />
            <br />
          </div>

          <Discuss />
          <Application />
          <OurTeam />
          <Faq />
        </div>
        <Footer />
      </div>
      <LogoBarWrapper />
      <FrameComponent5 />
    </div>
  );
};

export default Desktop;
