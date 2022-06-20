export const ADD_FAVOURITE = "ADD_FAVOURITE";
export const REMOVE_FROM_FAV = "REMOVE_FROM_FAV";
export const GET_JOBS = "GET_JOBS";
export const TOGGLE_SPINNER = "TOGGLE_SPINNER";
export const TOGGLE_ERROR = "TOGGLE_ERROR";
export const SET_NAME = "SET_NAME";

export const addToFavAction = (jobToAddToFav) => ({
  type: ADD_FAVOURITE,
  payload: jobToAddToFav
});
export const removeFromFavAction = (indexToRemove) => ({
  type: REMOVE_FROM_FAV,
  payload: indexToRemove
});

export const getUserNameAction = (name) => ({
  type: SET_NAME,
  payload: name
});

export const getJobsAction = (url) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(url);

      if (response.ok) {
        const jobs = await response.json();

        dispatch({
          type: GET_JOBS,
          payload: jobs.data
        });
        dispatch({
          type: TOGGLE_SPINNER
        });
      } else {
        // let's toggle the spinner off!
        dispatch({
          type: TOGGLE_SPINNER
        });
        dispatch({
          type: TOGGLE_ERROR
        });
      }
    } catch (error) {
      // let's toggle the spinner off!
      dispatch({
        type: TOGGLE_SPINNER
      });
      dispatch({
        type: TOGGLE_ERROR
      });
    }
  };
};
