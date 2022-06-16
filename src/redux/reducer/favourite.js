const initialState = {
  content: []
};

const favouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FAVOURITE":
      return {
        ...state,

        content: [...state.content, action.payload]
      };
    case "REMOVE_FROM_FAV":
      return {
        ...state,

        content: state.content.filter((el, i) => i !== action.payload)
      };
    default:
      return state;
  }
};
export default favouriteReducer;
