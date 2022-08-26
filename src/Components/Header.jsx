import React from "react";
import { Heading, Flex, Box } from "@chakra-ui/react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { CgDarkMode } from "react-icons/cg";

function Header() {
  return (
    <>
      <Flex width={"100%"} borderBottom={"1px solid grey"} padding={"6px 0"}>
        <Heading as={"h1"} size={"xl"} margin={"0 auto"}>
          Hexle
        </Heading>
        <Flex
          marginRight={"1rem"}
          gap={1}
          position={"absolute"}
          right={0}
          top={"0.7rem"}
        >
          <Box as="button">
            <AiOutlineQuestionCircle size={"2em"} />
          </Box>
          <Box as="button">
            <CgDarkMode size={"2em"} />
          </Box>
        </Flex>
      </Flex>
    </>
  );
}

export default Header;
