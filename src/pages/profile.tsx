import React from "react";
import { Input } from "@nextui-org/react";

import { motion } from "framer-motion";
const Profile: React.FC = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div
        id="Profile-container"
        className="md:w-2/5 w-full h-3/5  md:p-0 p-10 "
      >
        <form
          action=""
          method="post"
          className="w-full h-full flex flex-col justify-between border-[1px] p-10 border-[#110011] rounded-lg shadow-lg"
        >
          <Input
            isRequired
            size="md"
            type="email"
            variant={"underlined"}
            label="Email"
            placeholder="Change your email"
          />
          <Input
            isRequired
            size="md"
            type="password"
            variant={"underlined"}
            label="Password"
            placeholder="Change your Password"
          />
          <Input
            isRequired
            size="md"
            type="password"
            variant={"underlined"}
            label="Confirm Password"
            placeholder="Confirm your Password"
          />
          <motion.button
            whileTap={{
              scale: 0.8,
            }}
            className="border-[1px] border-black w-full bg-[#110011] text-white font-[400] md:text-[15px] py-2 rounded-md"
          >
            Save
          </motion.button>
          <motion.button
            whileTap={{
              scale: 0.8,
            }}
            className="  w-full text-[#110011] bg-white border-[1px]  border-[#110011] font-[400] md:text-[15px] py-2 rounded-md"
          >
            Cancel
          </motion.button>
          <div className="md:text-[15px] text-[12px] w-full flex justify-center text-[#9a9a9a]"></div>
        </form>
      </div>
    </div>
  );
};

export default Profile;

// This page will have sections similar to Dashboard. This page should be displayed when Name on the Right hand corner is displayed.

// This page will have the following
// Change Email
// Change Password
// Confirm Password
// Button: Save
// Button: Cancel
