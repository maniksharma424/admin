import React from "react";
import { Input } from "@nextui-org/react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Login: React.FC = () => {
  return (
    <div
      id="container"
      className="w-full h-screen flex font-monstreat md:bg-login bg-contain bg-no-repeat md:justify-end"
    >
      <div
        id="Login-container"
        className="md:w-2/5 w-full h-full  lg:p-28 md:p-16 p-10 "
      >
        <div className="w-full h-1/4 flex  justify-center items-center ">
          <Image
            alt="logo"
            width={250}
            height={250}
            src={
              "https://vakilsearch.com/blog/wp-content/uploads/2022/05/colors-in-logo.jpg"
            }
          />
        </div>

        <h1 className="font-[700] clear-left text-[30px]">Welcome Back!</h1>
        <form
          action=""
          method="post"
          className="w-full h-1/2 flex flex-col justify-around "
        >
          <Input
          isRequired
            size="md"
            type="email"
            variant={"underlined"}
            label="Email"
            placeholder="Enter your email"
          />
          <Input
          isRequired
            size="md"
            type="password"
            variant={"underlined"}
            label="Password"
            placeholder="Enter your Password"
          />
          <motion.button
            whileTap={{
              scale: 0.8,
            }}
            className="border-[1px] border-black w-full bg-[#110011] text-white font-[400] md:text-[15px] py-2 rounded-md"
          >
            Login Now
          </motion.button>
          <div className="md:text-[15px] text-[12px] w-full flex justify-center text-[#9a9a9a]">
            <p>
              Forgot Password{" "}
              <Link
                href={"/forgotPassword"}
                className=" underline font-[600] text-[#110011]"
              >
                Click here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
