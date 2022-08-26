import { atom, AtomEffect } from "recoil";
import { answerGrid } from "../const";

export const boardState = atom({
  key: "boardState",
  default: answerGrid,
});
