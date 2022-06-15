const initialState = {
  favourite: {
    content: [],
  },
}

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FAVOURITE":
      return {
        ...state,
        favourite: {
          ...state.favourite,
          content: [...state.favourite.content, action.payload],
        },
      }
    case "REMOVE_FROM_FAV":
      return {
        ...state,
        favourite: {
          ...state.favourite,
          content: state.favourite.content.filter(
            (el, i) => i !== action.payload
          ),
        },
      }
    default:
      return state
  }
}
export default mainReducer
