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
      <Grid width={"25%"} height={"55vh"} paddingTop={"2.3rem"}>
        {answerGrid.map((row) => {
          return (
            <Flex alignItems={"center"} justify={"center"} gap={"6px"}>
              {row.map((letter) => {
                return (
                  <Box
                    width={"3.5rem"}
                    height={"3.5rem"}
                    alignContent={"center"}
                    textAlign={"center"}
                    fontSize={"36px"}
                    fontWeight={"extrabold"}
                    border={"2px solid #D3D6DA"}
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
