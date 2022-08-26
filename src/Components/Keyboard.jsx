import React from "react";
import { Grid, Box, Button } from "@chakra-ui/react";

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
    "Del",
    "6",
    "7",
    "8",
    "9",
    "Enter",
  ];
  return (
    <Grid gridTemplateColumns={"repeat(6, 1fr)"} gap={1} paddingTop={"10px"}>
      {keysRequired.map((key) => {
        return <Button>{key}</Button>;
      })}
    </Grid>
  );
}

export default Keyboard;
