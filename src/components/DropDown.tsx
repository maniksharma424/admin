import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { FaUser } from "react-icons/fa";

export default function DropDown() {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button size="sm" variant="flat" className="text-[17px]">
          <FaUser />
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="new">Name</DropdownItem>
        <DropdownItem key="copy">Logout</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
