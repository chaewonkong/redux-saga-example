import { SCORE_DOWN_ASYNC, SCORE_UP_ASYNC } from "../actions/constants";
import { ScoreAction } from "../actions/actions";

const initialState = {
  score: 0
};

const reducer = (state = initialState, action: ScoreAction) => {
  const newState = { ...state };

  switch (action.type) {
    case SCORE_UP_ASYNC:
      newState.score += 1;
      return newState;
    case SCORE_DOWN_ASYNC:
      newState.score -= 1;
      return newState;
    default:
      return state;
  }
};

export type RootState = ReturnType<typeof reducer>;
export default reducer;
