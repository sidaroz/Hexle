import React, { useState, useEffect, useCallback } from "react";
import { Grid, Button } from "@chakra-ui/react";
import { FiDelete } from "react-icons/fi";
import { useRecoilState } from "recoil";
import { boardState } from "../state/board";

function Keyboard() {
  const [board, setBoard] = useRecoilState(boardState);
  const [currAttempt, setCurrAttempt] = useState({
    attempt: 0,
    letterPosition: 0,
  });

  const handleKeyboard = useCallback((e) => {
    if (e.key === "Enter") {
      if (currAttempt.letterPosition !== 6) return;
      setCurrAttempt({ attempt: currAttempt.attempt + 1, letterPosition: 0 });
    } else if (e.key === "Backspace") {
      if (currAttempt.letterPosition === 0) return;
      const newBoard = board.map((row) => [...row]);
      newBoard[currAttempt.attempt][currAttempt.letterPosition - 1] = "";
      setBoard(newBoard);
      setCurrAttempt({
        ...currAttempt,
        letterPosition: currAttempt.letterPosition - 1,
      });
    } else {
      keysRequired.forEach((key) => {
        if (e.key === key.toLowerCase()) {
          if (currAttempt.letterPosition > 5) return;
          const newBoard = board.map((row) => [...row]);
          newBoard[currAttempt.attempt][currAttempt.letterPosition] = key;
          setBoard(newBoard);
          setCurrAttempt({
            ...currAttempt,
            letterPosition: currAttempt.letterPosition + 1,
          });
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
      if (currAttempt.letterPosition !== 6) return;
      setCurrAttempt({ attempt: currAttempt.attempt + 1, letterPosition: 0 });
    } else if (e.target.textContent === "") {
      if (currAttempt.letterPosition === 0) return;
      const newBoard = board.map((row) => [...row]);
      newBoard[currAttempt.attempt][currAttempt.letterPosition - 1] = "";
      setBoard(newBoard);
      setCurrAttempt({
        ...currAttempt,
        letterPosition: currAttempt.letterPosition - 1,
      });
    } else {
      // Fills in the slots
      if (currAttempt.letterPosition > 5) return;
      const newBoard = board.map((row) => [...row]);
      newBoard[currAttempt.attempt][currAttempt.letterPosition] =
        e.target.textContent;
      setBoard(newBoard);
      setCurrAttempt({
        ...currAttempt,
        letterPosition: currAttempt.letterPosition + 1,
      });
    }
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
    "Enter",
    "6",
    "7",
    "8",
    "9",
    <FiDelete />,
  ];
  return (
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
            id={`key-${i}`}
            backgroundColor={"#D3D6DA"}
            padding={"1.8rem 0.3rem"}
            onClick={keyHandler}
          >
            {key}
          </Button>
        );
      })}
    </Grid>
  );
}

export default Keyboard;
