import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favouriteReducer from "../reducer/favourite";
import jobsReducer from "../reducer/jobs";

const rootReducer = combineReducers({
  favourite: favouriteReducer,
  jobs: jobsReducer
});

const store = configureStore({
  reducer: rootReducer
});

export default store;
