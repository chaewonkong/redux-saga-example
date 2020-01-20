import { SCORE_DOWN, SCORE_UP } from "./constants";

export const scoreUp = () => {
  return { type: SCORE_UP, score: 1 };
};

export const scoreDown = () => {
  return { type: SCORE_DOWN, score: 1 };
};

export type ScoreAction =
  | ReturnType<typeof scoreUp>
  | ReturnType<typeof scoreDown>;
