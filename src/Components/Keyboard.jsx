import React from "react";
import { Grid, Box, Button } from "@chakra-ui/react";
import { FiDelete } from "react-icons/fi";

function Keyboard() {
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
    >
      {keysRequired.map((key, i) => {
        return (
          <Button
            id={`key-${i}`}
            backgroundColor={"#D3D6DA"}
            padding={"1.8rem 0.3rem"}
          >
            {key}
          </Button>
        );
      })}
    </Grid>
  );
}

export default Keyboard;
