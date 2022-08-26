import React from "react";
import { Heading, Flex } from "@chakra-ui/react";

function Header() {
  return (
    <Flex>
      <Heading as={"h1"} size={"xl"}>
        Hexle
      </Heading>
    </Flex>
  );
}

export default Header;
