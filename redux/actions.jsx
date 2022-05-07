export const SET_FAVORITE_LIST = "SET_FAVORITE_LIST";
export const SET_DATA = "SET_DATA";

export const setFavoriteList = (favoriteList) => (dispatch) => {
  dispatch({
    type: SET_FAVORITE_LIST,
    payload: favoriteList,
  });
};

export const setData = (data) => (dispatch) => {
  dispatch({
    type: SET_DATA,
    payload: data,
  });
};
