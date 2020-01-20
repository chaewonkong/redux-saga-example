interface IAction {
  type: string;
  score: number;
}

const initialState = {
  score: 20
};

const reducer = (state = initialState, action: IAction) => {
  const newState = { ...state };

  switch (action.type) {
    case "SCORE_UP_ASYNC":
      newState.score += 1;
      return newState;
    case "SCORE_DOWN_ASYNC":
      newState.score -= 1;
      return newState;
    default:
      return state;
  }
};

export default reducer;
