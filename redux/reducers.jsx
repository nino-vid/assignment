import { SET_FAVORITE_LIST, SET_DATA } from "./actions";

const initialState = {
  data: [],
  favoriteList: [],
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_FAVORITE_LIST:
      return { ...state, favoriteList: action.payload };
    case SET_DATA:
      return { ...state, data: action.payload };
    default:
      return state;
  }
}

export default userReducer;
