import React, { useState } from "react";
import { Grid, Box, GridItem, Flex } from "@chakra-ui/react";

function GridContainer() {
  const answerGrid = [
    ["R", "a", "a", "a", "a", "a"],
    ["a", "a", "a", "a", "a", "a"],
    ["a", "a", "a", "a", "a", "a"],
    ["a", "a", "a", "a", "a", "a"],
    ["a", "a", "a", "a", "a", "a"],
    ["a", "a", "a", "a", "a", "a"],
  ];
  const [board, setBoard] = useState(answerGrid);

  return (
    <>
      <Grid height={"60vh"} paddingTop={"2.3rem"} margin={"0 auto"}>
        {answerGrid.map((row) => {
          return (
            <Flex alignItems={"center"} justify={"center"} gap={"6px"}>
              {row.map((letter) => {
                return (
                  <Box
                    width={"3.9rem"}
                    height={"3.9rem"}
                    alignContent={"center"}
                    textAlign={"center"}
                    fontSize={"32px"}
                    fontWeight={"bold"}
                    border={"2px solid #D3D6DA"}
                    paddingTop={"3px"}
                  >
                    {letter}
                  </Box>
                );
              })}
            </Flex>
          );
        })}
      </Grid>
    </>
  );
}

export default GridContainer;
