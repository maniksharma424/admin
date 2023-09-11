import { RxHamburgerMenu } from "react-icons/rx";
import React from "react";
import { useState } from "react";
import DropDown from "./DropDown";
import SideMenu from "./SideMenu";
const Header = () => {
  const [showSidebar, setShowSidebar] = useState<Boolean>(true);
  const handleSideBar = () => {
    setShowSidebar((n) => !n);
  };
  return (
    <div className="w-full h-fit flex justify-between items-center p-3 font-monstreat ">
      {showSidebar ? <SideMenu handleSideBar={handleSideBar} /> : null}
      <div id="burger" className="text-[25px] w-1/4 flex justify-start">
        <button
          onClick={(e) => {
            e.preventDefault();
            handleSideBar();
          }}
        >
          <RxHamburgerMenu />
        </button>
      </div>
      {/* <ul
        id="main-icons"
        className="w-2/4 flex items-center justify-evenly  lg:text-[19px]"
      >
        <button className="flex items-center  ">
          <VscOrganization className="mx-2 font-[700] text-[18px]" />
          <span>Companies</span>
        </button>
        <button className="flex items-center  ">
          <SiCampaignmonitor className="mx-2 font-[700] text-[18px]" />
          <span>Campaigns</span>
        </button>
        <button className="flex items-center  ">
          <FaUsers className="mx-2 font-[700] text-[18px]" />
          <span>Users</span>
        </button>
      </ul> */}
      <div className="w-1/4 flex justify-end items-center ">
        <DropDown />
      </div>
    </div>
  );
};

export default Header;
