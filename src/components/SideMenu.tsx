import Image from "next/image";
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { motion } from "framer-motion";
const SideMenu = ({ handleSideBar }: { handleSideBar: () => void }) => {
  return (
    <motion.div
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      transition={{ duration: "0.3", ease: "anticipate" }}
      className="lg:w-[200px] md:w-32 sm:w-28 h-screen flex flex-col  left-0 top-0 border-[1px] border-black py-2 bg-[#110011] text-white px-1 fixed font-monstreat"
    >
      <div id="burger" className=" text-[25px] w-full flex justify-end">
        <button
          onClick={(e) => {
            e.preventDefault();
            handleSideBar();
          }}
        >
          <RxHamburgerMenu />
        </button>
      </div>

      <div
        id="image"
        className="w-full h-fit py-4 flex justify-center items-center"
      >
        <Image
          alt="logo"
          width={100}
          height={100}
          src={
            "https://res.cloudinary.com/du19shvhf/image/upload/v1694167069/e1kft6m8winwfncxemvq.jpg"
          }
        />
      </div>
      <ul
        id="links"
        className="w-full h-1/2   justify-around items-start flex flex-col pl-7 font-[400]"
      >
        <button className="font-[700]">Dashboard</button>
        <button>Companies</button>
        <button>Campaigns</button>
        <button>CampaignsUsers</button>
        <button>Opt out numbers</button>
        <button>Price Settings</button>
        <button>Configuration</button>
      </ul>
    </motion.div>
  );
};

export default SideMenu;

// Links
// Dashboard (Highlighted)
// Companies
// Campaigns
// Users
// Opt out Numbers
// Price Settings
// Configuration
