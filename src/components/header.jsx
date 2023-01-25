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
  const [isItemVisible, setisItemVisible] = useState(false);

  return (
    <>
      {/* Toggler-START */}
      <img
        src={isMenuOpen ? cross : menu}
        alt=""
        className="lg:hidden flex fixed h-6 right-10 top-10"
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
        }}
      />
      {/* Toggler-END */}
      {/* Big-Scrren-nav-start */}
      <div
        className={`hidden h-[100vh] w-[200px] sm:w-[100px] sm:hover:[200px]  bg-[#8444df] hover:transition-all ease-linear delay-300 hover:w-[200px] duration-300 fixed z-10  text-white lg:flex items-center justify-between flex-col`}
        id="nav"
        onMouseEnter={() => {
          setisItemVisible(true);
        }}
        onMouseLeave={() => {
          setisItemVisible(false);
        }}
      >
        <div className="bg-[#773dc8] h-28 flex items-center justify-center text-2xl min-w-full">
          MFK
        </div>
        {/* mid-item-start */}
        <div className="flex flex-col gap-4 absolute left-0 top-[30%]">
          {/* nav-item-start */}
          <div
            className={`flex left-[20%] relative  flex-row gap-5 justify-center items-center  w-[150px] p-3 rounded transition-all ease-in-out delay-150 hover:bg-[#b288ecf1] duration-200 overflow-hidden`}
            onClick={() => {
              document
                .getElementById("hero")
                .scrollIntoView({ behavior: "smooth" });
            }}
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
            id="aboutDiv"
            onClick={() => {
              document
                .getElementById("about")
                .scrollIntoView({ behavior: "smooth" });
            }}
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
            onClick={() => {
              document
                .getElementById("skill")
                .scrollIntoView({ behavior: "smooth" });
            }}
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
        className={`fixed top-0 left-0 z-10 lg:hidden h-[100vh] transition-all ease-linear delay-300 ${
          isMenuOpen ? "-translate-x-[0px]" : "-translate-x-[350px]"
        } duration-200 w-[200px] bg-[#8444df]   text-white flex items-center justify-between flex-col`}
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
            onClick={() => {
              document
                .getElementById("hero")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            <img src={home} alt="" color="#fff" />
            <h1 className={`mt-1 w-[100px]`}>HOME</h1>
          </div>
          {/* nav-item-end */}
          {/* nav-item-start */}
          <div
            className={`relative left-[20%] flex flex-row gap-5 justify-center items-center  w-[150px] p-3 rounded transition-all ease-in-out delay-150 hover:bg-[#b288ecf1] duration-20`}
            onClick={() => {
              document
                .getElementById("about")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            <img src={user} alt="" color="#fff" />
            <h1 className={`mt-1 w-[100px]`}>ABOUT</h1>
          </div>
          {/* nav-item-end */}
          {/* nav-item-start */}
          <div
            className={`relative left-[20%] flex flex-row gap-5 justify-center items-center  w-[150px] p-3  rounded transition-all ease-in-out delay-150 hover:bg-[#b288ecf1] duration-200`}
            onClick={() => {
              document
                .getElementById("skill")
                .scrollIntoView({ behavior: "smooth" });
            }}
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
