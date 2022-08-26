import { atom } from "recoil";
import { answerGrid, currAttempt } from "../const";

export const boardState = atom({
  key: "boardState",
  default: answerGrid,
});

export const currAttemptState = atom({
  key: "currAttemptState",
  default: currAttempt,
});
