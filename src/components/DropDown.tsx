import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { FaUser } from "react-icons/fa";
import Link from "next/link";

export default function DropDown() {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button size="sm" variant="flat" className="text-[17px]">
          <FaUser />
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="new">
          <Link href={"/profile"} className="w-full h-full">
            Ayappa Nagubandi
          </Link>
        </DropdownItem>
        
        <DropdownItem key="copy">
          <Link href={"/login"}>Logout</Link>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
