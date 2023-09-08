import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const forgotPassword: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [backdrop, setBackdrop] = useState<string>("blur");
  const handleOpen = (backdrop: string) => {
    setBackdrop(backdrop);
    onOpen();
  };

  return (
    <div
      id="container"
      className="w-full h-screen flex font-monstreat md:bg-forgotPassword bg-contain bg-no-repeat md:justify-end"
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

        <h1 className="font-[700] clear-left text-[30px]">Forgot Password!</h1>
        <form
          action=""
          method="post"
          className="w-full h-1/2 flex flex-col justify-around "
        >
          <Input
            isRequired
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            size="md"
            type="email"
            variant={"underlined"}
            label="Email"
            placeholder="Enter your email"
          />
          <motion.button
            onClick={(e) => {
              e.preventDefault();
              handleOpen(backdrop);
            }}
            whileTap={{
              scale: 0.8,
            }}
            className="border-[1px] border-[#c45ebc] w-full bg-[#c45ebc] text-white font-[400] md:text-[15px] py-2 rounded-md"
          >
            Change Password
          </motion.button>
          <div className="md:text-[15px] text-[12px] w-full flex justify-center text-[#9a9a9a]">
            <p>
              Already have an account{" "}
              <Link
                className=" underline font-[600] text-blue-500"
                href={"/login"}
              >
                Sign in
              </Link>
            </p>
          </div>
        </form>
        <Modal backdrop={"blur"} isOpen={isOpen} onClose={onClose}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Change password
                </ModalHeader>
                <ModalBody>
                  <p>Please check your email for the new password</p>
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onPress={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
};

export default forgotPassword;
