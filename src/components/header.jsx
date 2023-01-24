import { useEffect, useState } from "react";
import menu from "../assets/menu.svg";
import cross from "../assets/cross.svg";
import home from "../assets/navIcon/home.svg";
import user from "../assets/navIcon/about.svg";
import skill from "../assets/navIcon/skill.svg";
import work from "../assets/navIcon/work.svg";
import contact from "../assets/navIcon/contact.svg";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentMenu, setCurrentMenu] = useState("-translate-x-[350px]");
  const [isItemVisible, setisItemVisible] = useState(false);

  const menuToggler = () => {
    if (currentMenu === "-translate-x-[0px]") {
      setIsMenuOpen(false);

      setCurrentMenu("-translate-x-[350px]");
    } else {
      setIsMenuOpen(true);

      setCurrentMenu("-translate-x-[0px]");
    }
  };

  useEffect(() => {
    document.getElementById("nav").addEventListener("mouseenter", () => {
      // setwidth("60px");
      // setvisibility()
      setisItemVisible(true);
    });
    document.getElementById("nav").addEventListener("mouseleave", () => {
      setisItemVisible(false);
    });
  }, []);

  return (
    <>
      {/* Toggler-START */}
      <img
        src={isMenuOpen ? cross : menu}
        alt=""
        className="md:hidden flex absolute h-6 right-10 top-10"
        onClick={menuToggler}
      />
      {/* Toggler-END */}
      {/* Big-Scrren-nav-start */}
      <div
        className={`hidden h-[100vh] w-[200px] sm:w-[100px] sm:hover:[200px]  bg-[#8444df] hover:transition-all ease-linear delay-300 hover:w-[200px] duration-300 absolute  text-white md:flex items-center justify-between flex-col`}
        id="nav"
      >
        <div className="bg-[#773dc8] h-28 flex items-center justify-center text-2xl min-w-full">
          MFK
        </div>
        {/* mid-item-start */}
        <div className="flex flex-col gap-4 absolute left-0 top-[30%]">
          {/* nav-item-start */}
          <div
            className={`flex left-[20%] relative  flex-row gap-5 justify-center items-center  w-[150px] p-3 rounded transition-all ease-in-out delay-150 hover:bg-[#b288ecf1] duration-200 overflow-hidden`}
          >
            <img src={home} alt="" color="#fff" />
            <h1
              className={`   ${
                isItemVisible ? "visible" : "invisible"
              }  mt-1 w-[100px] delay-300 text-start`}
            >
              HOME
            </h1>
          </div>
          {/* nav-item-end */}
          {/* nav-item-start */}
          <div
            className={`relative left-[20%] flex flex-row gap-5 justify-center items-center  w-[150px] p-3 rounded transition-all ease-in-out delay-150 hover:bg-[#b288ecf1] duration-20`}
          >
            <img src={user} alt="" color="#fff" />
            <h1
              className={` ${
                isItemVisible ? "visible" : "invisible"
              } mt-1 w-[100px] delay-300 text-start`}
            >
              ABOUT
            </h1>
          </div>
          {/* nav-item-end */}
          {/* nav-item-start */}
          <div
            className={`relative left-[20%] flex flex-row gap-5 justify-center items-center  w-[150px] p-3  rounded transition-all ease-in-out delay-150 hover:bg-[#b288ecf1] duration-200`}
          >
            <img src={skill} alt="" color="#fff" />
            <h1
              className={`${
                isItemVisible ? "visible" : "invisible"
              } mt-1 w-[100px]  delay-300 text-start`}
            >
              SKILL
            </h1>
          </div>
          {/* nav-item-end */}
          {/* nav-item-start */}
          <div
            className={`relative left-[20%] flex flex-row gap-5 justify-center items-center  w-[150px] p-3  rounded transition-all ease-in-out delay-150 hover:bg-[#b288ecf1] duration-200`}
          >
            <img src={work} alt="" color="#fff" />
            <h1
              className={`${
                isItemVisible ? "visible" : "invisible"
              } mt-1 w-[100px]  delay-300 text-start`}
            >
              WORKS
            </h1>
          </div>
          {/* nav-item-end */}
          {/* nav-item-start */}
          {/* nav-item-start */}
          <div
            className={`relative left-[20%] flex flex-row gap-4 justify-center items-center  w-[150px] p-3  rounded transition-all ease-in-out delay-150 hover:bg-[#b288ecf1] duration-200`}
          >
            <img src={contact} alt="" color="#fff" />
            <h1
              className={` ${
                isItemVisible ? "visible" : "invisible"
              } mt-1 w-[100px]  delay-300 text-start `}
            >
              CONTACT
            </h1>
          </div>
          {/* nav-item-end */}
        </div>
        {/* mid-item-end */}

        <div></div>
      </div>
      {/* Big-Scrren-nav-end */}

      {/* Small-Screen-Nav-Start */}
      <div
        className={`md:hidden h-[100vh] transition-all ease-linear delay-300 ${currentMenu} duration-200 w-[200px] bg-[#8444df] absolute  text-white flex items-center justify-between flex-col`}
        id="nav"
      >
        <div className="bg-[#773dc8] h-28 flex items-center justify-center text-2xl min-w-full">
          MFK
        </div>
        {/* mid-item-start */}
        <div className="flex flex-col gap-4 absolute left-0 top-[30%]">
          {/* nav-item-start */}
          <div
            className={`flex left-[20%] relative  flex-row gap-5 justify-center items-center  w-[150px] p-3 rounded transition-all ease-in-out delay-150 hover:bg-[#b288ecf1] duration-200 overflow-hidden`}
          >
            <img src={home} alt="" color="#fff" />
            <h1 className={`mt-1 w-[100px]`}>HOME</h1>
          </div>
          {/* nav-item-end */}
          {/* nav-item-start */}
          <div
            className={`relative left-[20%] flex flex-row gap-5 justify-center items-center  w-[150px] p-3 rounded transition-all ease-in-out delay-150 hover:bg-[#b288ecf1] duration-20`}
          >
            <img src={user} alt="" color="#fff" />
            <h1 className={`mt-1 w-[100px]`}>ABOUT</h1>
          </div>
          {/* nav-item-end */}
          {/* nav-item-start */}
          <div
            className={`relative left-[20%] flex flex-row gap-5 justify-center items-center  w-[150px] p-3  rounded transition-all ease-in-out delay-150 hover:bg-[#b288ecf1] duration-200`}
          >
            <img src={skill} alt="" color="#fff" />
            <h1 className={`mt-1 w-[100px]`}>SKILL</h1>
          </div>
          {/* nav-item-end */}
          {/* nav-item-start */}
          <div
            className={`relative left-[20%] flex flex-row gap-5 justify-center items-center  w-[150px] p-3  rounded transition-all ease-in-out delay-150 hover:bg-[#b288ecf1] duration-200`}
          >
            <img src={work} alt="" color="#fff" />
            <h1 className={`mt-1 w-[100px]`}>WORKS</h1>
          </div>
          {/* nav-item-end */}
          {/* nav-item-start */}
          {/* nav-item-start */}
          <div
            className={`relative left-[20%] flex flex-row gap-4 justify-center items-center  w-[150px] p-3  rounded transition-all ease-in-out delay-150 hover:bg-[#b288ecf1] duration-200`}
          >
            <img src={contact} alt="" color="#fff" />
            <h1 className={`mt-1 w-[100px]`}>CONTACT</h1>
          </div>
          {/* nav-item-end */}
        </div>
        {/* mid-item-end */}

        <div></div>
      </div>
      {/* Small-Screen-Nav-End */}
    </>
  );
};
export default Header;
