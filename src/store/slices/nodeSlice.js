import { createSlice } from "@reduxjs/toolkit";

const nodeSlice = createSlice({
  name: "node",
  initialState: {
    nodeType: null, // 1 for RNMS, 2 for CNMS
    systemName: "",
  },
  reducers: {
    setNodeType: (state, action) => {
      state.nodeType = action.payload;
      state.systemName = action.payload === 1 ? "RNMS" : "CNMS";
    },
  },
});

export const { setNodeType } = nodeSlice.actions;
export default nodeSlice.reducer;
