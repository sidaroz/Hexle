import React, { useEffect } from "react";
import {
  Heading,
  Flex,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Container,
  Text,
  Highlight,
} from "@chakra-ui/react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { CgDarkMode } from "react-icons/cg";

function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const randomColour = "B32D2F";
  const randomColourTwo = "2F44BC";
  const randomColourThree = "0F111E";
  useEffect(() => {
    onOpen();
  }, [onOpen]);

  return (
    <>
      <Flex width={"100%"} padding={"6px 0"}>
        <Heading
          as={"h1"}
          size={"xl"}
          margin={"0 auto"}
          bgGradient={
            "linear(to-r,  red.300, yellow.300, blue.600, purple.500)"
          }
          bgClip={"text"}
        >
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
            <AiOutlineQuestionCircle size={"2em"} onClick={onOpen} />
          </Box>
          <Box as="button">
            <CgDarkMode size={"2em"} />
          </Box>
        </Flex>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            textAlign={"center"}
            fontSize={"15px"}
            fontWeight={"extrabold"}
          >
            HOW TO PLAY
          </ModalHeader>
          <ModalBody>
            <Container>
              <Text fontSize={"14px"} marginBottom={"10px"}>
                <Highlight query={"HEXLE"} styles={{ fontWeight: "extrabold" }}>
                  Guess the HEXLE in 6 tries.
                </Highlight>
              </Text>
              <Text noOfLines={1} fontSize={"14px"} marginBottom={"10px"}>
                Each guess must be a valid Hex colour code. Hit the enter button
                to submit.
              </Text>
              <Text
                fontSize={"14px"}
                paddingBottom={"10px"}
                borderBottom={"1px solid #D3D6DA"}
              >
                After each guess, the color of the tiles will change to show how
                close your guess was to the word.
              </Text>
            </Container>
            <Container paddingTop={"10px"}>
              <Text fontSize={"14px"} fontWeight={"extrabold"}>
                Examples
              </Text>
              <Flex gap={1} marginTop={"10px"}>
                {randomColour.split("").map((letter, i) => {
                  return (
                    <Box
                      key={i}
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"center"}
                      width={"2.5rem"}
                      height={"2.5rem"}
                      textAlign={"center"}
                      fontSize={"33px"}
                      fontWeight={"extrabold"}
                      border={letter === "3" ? "none" : "2px solid #878A8C"}
                      bgColor={letter === "3" ? "#6AA964" : ""}
                      color={letter === "3" ? "white" : ""}
                    >
                      {letter}
                    </Box>
                  );
                })}
              </Flex>
              <Text fontSize={"14px"} marginTop={"10px"}>
                <Highlight query={"3"} styles={{ fontWeight: "extrabold" }}>
                  The number 3 is in the colour and in the correct spot.
                </Highlight>
              </Text>
              <Flex gap={1} marginTop={"10px"}>
                {randomColourTwo.split("").map((letter, i) => {
                  return (
                    <Box
                      key={i}
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"center"}
                      width={"2.5rem"}
                      height={"2.5rem"}
                      textAlign={"center"}
                      fontSize={"33px"}
                      fontWeight={"extrabold"}
                      border={letter === "B" ? "none" : "2px solid #878A8C"}
                      bgColor={letter === "B" ? "#C8B458" : ""}
                      color={letter === "B" ? "white" : ""}
                    >
                      {letter}
                    </Box>
                  );
                })}
              </Flex>
              <Text fontSize={"14px"} marginTop={"10px"}>
                The letter{" "}
                <Highlight query={"B"} styles={{ fontWeight: "extrabold" }}>
                  B
                </Highlight>{" "}
                is in the colour but in the wrong spot.
              </Text>
              <Flex gap={1} marginTop={"10px"}>
                {randomColourThree.split("").map((letter, i) => {
                  return (
                    <Box
                      key={i}
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"center"}
                      width={"2.5rem"}
                      height={"2.5rem"}
                      textAlign={"center"}
                      fontSize={"33px"}
                      fontWeight={"extrabold"}
                      border={letter === "E" ? "none" : "2px solid #878A8C"}
                      bgColor={letter === "E" ? "#787C7E" : ""}
                      color={letter === "E" ? "white" : ""}
                    >
                      {letter}
                    </Box>
                  );
                })}
              </Flex>
              <Text
                fontSize={"14px"}
                marginTop={"10px"}
                paddingBottom={"20px"}
                borderBottom={"1px solid #D3D6DA"}
              >
                The letter{" "}
                <Highlight query={"E"} styles={{ fontWeight: "extrabold" }}>
                  E
                </Highlight>{" "}
                is not in the colour in any spot.
              </Text>
              <Text
                fontWeight={"extrabold"}
                fontSize={"14px"}
                marginTop={"10px"}
                paddingBottom={"10px"}
              >
                A new HEXLE will be available each reload!
              </Text>
            </Container>
          </ModalBody>
          <ModalCloseButton />
        </ModalContent>
      </Modal>
    </>
  );
}

export default Header;
