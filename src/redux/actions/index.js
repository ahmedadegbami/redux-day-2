export const addToFavAction = (jobToAddToFav) => ({
  type: "ADD_FAVOURITE",
  payload: jobToAddToFav,
})
export const removeFromFavAction = (indexToRemove) => ({
  type: "REMOVE_FROM_FAV",
  payload: indexToRemove,
})
