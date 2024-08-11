import { createSlice } from "@reduxjs/toolkit";
import { GENDER } from "@/const";

export type User = {
  gender: number;
  //   myMbtiId?: number;
  goodCompatibilityMbtis: number[];
};

const initialState: User = {
  gender: GENDER.MALE,
  //   myMbtiId: undefined,
  goodCompatibilityMbtis: [],
};

export const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    set: (state: User, action: { payload: User }): User => {
      const newState = { ...state, ...action.payload };
      sessionStorage.setItem("user", JSON.stringify(newState));
      return newState;
    },
    remove: (state: User): User => {
      const newState = {
        gender: GENDER.MALE,
        // myMbtiId: undefined,
        goodCompatibilityMbtis: [],
      };
      sessionStorage.setItem("user", JSON.stringify(newState));
      return newState;
    },
  },
});

export const { set, remove } = userDataSlice.actions;
export default userDataSlice.reducer;
