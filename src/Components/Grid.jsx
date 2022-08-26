import React, { useState } from "react";
import { Grid, Box, Flex } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { boardState } from "../state/board";

function GridContainer() {
  const board = useRecoilValue(boardState);

  return (
    <>
      <Grid height={"60vh"} paddingTop={"2.3rem"} margin={"0 auto"}>
        {board.map((row) => {
          return (
            <Flex alignItems={"center"} justify={"center"} gap={"6px"}>
              {row.map((letter) => {
                return (
                  <Box
                    display={"flex"}
                    width={"3.9rem"}
                    height={"3.9rem"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    fontSize={"32px"}
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
