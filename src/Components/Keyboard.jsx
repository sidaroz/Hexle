import React, { useEffect, useCallback } from "react";
import {
  Grid,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Text,
  Flex,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiDelete } from "react-icons/fi";
import { useRecoilState } from "recoil";
import { boardState, currAttemptState, gameOverState } from "../state/board";
import { correctColour } from "../const";

function Keyboard() {
  const [board, setBoard] = useRecoilState(boardState);
  const [currAttempt, setCurrAttempt] = useRecoilState(currAttemptState);
  const [gameOver, setGameOver] = useRecoilState(gameOverState);
  const answerColour = correctColour;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("white", "#1A202C");

  const onEnterFunc = function () {
    const guess = board[currAttempt.attempt].join("");
    const previousRowHash = document.querySelector(
      `#hash-${currAttempt.attempt}`
    );
    if (currAttempt.letterPosition !== 6) return;
    flipTileHandler();
    hashHandler();
    document.body.style.backgroundColor = `#${guess}`;
    if (answerColour === guess) {
      previousRowHash.classList.add("hidden");
      setGameOver("WON");
      setTimeout(() => {
        onOpen();
      }, 3000);
      return;
    } else if (currAttempt.attempt >= 5) {
      setGameOver("LOST");
      setTimeout(() => {
        onOpen();
      }, 3000);
      return;
    }
    setCurrAttempt({ attempt: currAttempt.attempt + 1, letterPosition: 0 });
  };

  const onDeleteFunc = function () {
    if (currAttempt.letterPosition === 0) return;
    const newBoard = board.map((row) => [...row]);
    newBoard[currAttempt.attempt][currAttempt.letterPosition - 1] = "";
    setBoard(newBoard);
    setCurrAttempt({
      ...currAttempt,
      letterPosition: currAttempt.letterPosition - 1,
    });
  };

  const onKeyDownFunc = function (key) {
    if (currAttempt.letterPosition > 5) return;
    const newBoard = board.map((row) => [...row]);
    newBoard[currAttempt.attempt][currAttempt.letterPosition] = key;
    setBoard(newBoard);
    setCurrAttempt({
      ...currAttempt,
      letterPosition: currAttempt.letterPosition + 1,
    });
  };
  const handleKeyboard = useCallback((e) => {
    if (e.key === "Enter") {
      onEnterFunc();
    } else if (e.key === "Backspace") {
      onDeleteFunc();
    } else {
      keysRequired.forEach((key) => {
        if (e.key.toUpperCase() === key) {
          onKeyDownFunc(key);
        }
      });
    }
  });

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);

    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, [handleKeyboard]);

  const keyHandler = (e) => {
    if (e.target.textContent === "Enter") {
      // If not full then return whatever needed
      onEnterFunc();
    } else if (e.target.textContent === "") {
      onDeleteFunc();
    } else {
      // Fills in the slots
      onKeyDownFunc(e.target.textContent);
    }
  };

  const addColourToKeyBoardKey = function (letter, style) {
    const keyboardKey = document.querySelector(`#key-${letter}`);
    keyboardKey.classList.add(style);
  };

  const flipTileHandler = () => {
    const rowTiles = document.querySelector(
      `#guess__row-${currAttempt.attempt}`
    ).childNodes;
    let checkHexle = correctColour;
    const guess = [];

    rowTiles.forEach((tile) => {
      guess.push({ letter: tile.textContent, colour: "error" });
    });

    guess.forEach((guessLetter, index) => {
      if (guessLetter.letter === correctColour[index]) {
        guessLetter.colour = "correct";
        checkHexle = checkHexle.replace(guessLetter.letter, "");
      }
    });

    guess.forEach((guessLetter) => {
      if (checkHexle.includes(guessLetter.letter)) {
        guessLetter.colour = "almost";
        checkHexle = checkHexle.replace(guessLetter.letter, "");
        return;
      }
    });

    rowTiles.forEach((tile, index) => {
      setTimeout(() => {
        tile.classList.add("flip");
        tile.classList.add(guess[index].colour);
        addColourToKeyBoardKey(guess[index].letter, guess[index].colour);
      }, 500 * index);
    });
  };

  const hashHandler = function () {
    const currentRowHash = document.querySelector(
      `#hash-${currAttempt.attempt + 1}`
    );
    const previousRowHash = document.querySelector(
      `#hash-${currAttempt.attempt}`
    );
    if (currAttempt.attempt < 5) {
      previousRowHash.classList.add("fall");
      setTimeout(() => {
        currentRowHash.classList.remove("hidden");
        previousRowHash.classList.add("hidden");
      }, 200);
    }
  };
  useEffect(() => {
    const currentRowHash = document.querySelector(`#hash-${0}`);
    currentRowHash.classList.remove("hidden");
  }, []);

  const playAgainHandler = function () {
    // TODO Could set all states back to initial.
    // onClose();
    // document.body.style.backgroundColor = "#1A202C";
    // const currentRowHash = document.querySelector(
    //   `#hash-${currAttempt.attempt + 1}`
    // );
    // const initialRowHash = document.querySelector(`#hash-${0}`);
    // currentRowHash.classList.add("hidden");
    // initialRowHash.classList.remove("hidden");
    // const rowTiles = document.querySelector(
    //   `#guess__row-${currAttempt.attempt}`
    // ).childNodes;
    // toggleColorMode(2);

    // setGameOver("");
    // setBoard([
    //   ["", "", "", "", "", ""],
    //   ["", "", "", "", "", ""],
    //   ["", "", "", "", "", ""],
    //   ["", "", "", "", "", ""],
    //   ["", "", "", "", "", ""],
    //   ["", "", "", "", "", ""],
    // ]);
    // setCurrAttempt({ attempt: 0, letterPosition: 0 });

    window.location.reload();
  };

  const keysRequired = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "ENTER",
    "6",
    "7",
    "8",
    "9",
    <FiDelete />,
  ];
  return (
    <>
      <Grid
        gridTemplateRows={"repeat(3, 1fr)"}
        gridTemplateColumns={"repeat(6, 1fr)"}
        gap={1}
        paddingTop={"10px"}
        onKeyDown={handleKeyboard}
      >
        {keysRequired.map((key, i) => {
          return (
            <Button
              key={i}
              id={i === 17 ? "key-del" : `key-${key}`}
              backgroundColor={"#D3D6DA"}
              padding={"1.8rem 0.3rem"}
              onClick={keyHandler}
            >
              {key}
            </Button>
          );
        })}
      </Grid>
      <Modal
        onClose={onClose}
        isOpen={isOpen}
        isCentered
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize={"80px"} textAlign={"center"}>
            YOU {gameOver === "WON" ? "WIN!" : "LOSE"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text
              bgColor={`#${correctColour}`}
              bgClip={"text"}
              textAlign={"center"}
              fontSize={"60px"}
              fontWeight={"bold"}
            >
              #{correctColour}
            </Text>
          </ModalBody>
          <ModalFooter>
            <Flex margin={"0 auto"} gap={4}>
              <Button _hover={{ bgColor: `#${correctColour}`, color: "white" }}>
                Share
              </Button>
              <Button
                bgColor={"#6AA964"}
                color={"white"}
                _hover={{ bgColor: "green.500" }}
                onClick={playAgainHandler}
              >
                Play Again
              </Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Keyboard;
