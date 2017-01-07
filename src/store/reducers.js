import { combineReducers } from "redux";

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

export default combineReducers({
  counter : counterReducer,
});
