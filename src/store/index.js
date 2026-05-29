// import { configureStore } from "@reduxjs/toolkit";
// import nodeReducer from "./slices/nodeSlice";
// const store = configureStore({
//   reducer: {
//     node: nodeReducer,
//   },
// });

// export default store;

// src/store/index.js
import { configureStore } from "@reduxjs/toolkit";
import nodeSlice from "./slices/nodeSlice";

const store = configureStore({
  reducer: {
    node: nodeSlice, // <-- must be reducer function
  },
});

export default store;
