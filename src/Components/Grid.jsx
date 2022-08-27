import React, { useState } from "react";
import { Grid, Box, Flex } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { boardState } from "../state/board";
import { correctColour } from "../const/index";

function GridContainer() {
  const board = useRecoilValue(boardState);
  const correctHexle = correctColour;
  console.log(correctHexle);

  return (
    <>
      <Grid maxHeight={"60vh"} paddingTop={"2.3rem"} margin={"0 auto"}>
        {board.map((row, i) => {
          return (
            <>
              <Flex
                alignItems={"center"}
                justify={"center"}
                position={"relative"}
                left={"-10px"}
              >
                <Box
                  id={`hash-${i}`}
                  fontSize={"44px"}
                  fontWeight={"extrabold"}
                  position={"relative"}
                  left={"-10px"}
                  bgColor={`#${correctColour}`}
                  bgClip={"text"}
                  className={"hidden"}
                >
                  #
                </Box>
                <Flex
                  key={i}
                  alignItems={"center"}
                  justify={"center"}
                  gap={"6px"}
                  id={`guess__row-${i}`}
                >
                  {row.map((letter, i) => {
                    return (
                      <Box
                        key={i}
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
              </Flex>
            </>
          );
        })}
      </Grid>
    </>
  );
}

export default GridContainer;
