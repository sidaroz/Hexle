import { atom } from "recoil";
import { answerGrid, currAttempt, gameOver } from "../const";

export const boardState = atom({
  key: "boardState",
  default: answerGrid,
});

export const currAttemptState = atom({
  key: "currAttemptState",
  default: currAttempt,
});

export const gameOverState = atom({
  key: "gameOverState",
  default: gameOver,
});
