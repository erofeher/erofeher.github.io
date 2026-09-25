import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Status } from "../types";

export type StatusFilter = "ALL" | Status;
export type CategoryFilter = "ALL" | "System" | "Sensor" | "Network";
export type TimeRange = "15M" | "1H" | "24H";

interface FiltersState {
  status: StatusFilter;
  category: CategoryFilter;
  timeRange: TimeRange;
}

const initialState: FiltersState = {
  status: "ALL",
  category: "ALL",
  timeRange: "1H"
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setStatus: (state, action: PayloadAction<StatusFilter>) => {
      state.status = action.payload;
    },
    setCategory: (state, action: PayloadAction<CategoryFilter>) => {
      state.category = action.payload;
    },
    setTimeRange: (state, action: PayloadAction<TimeRange>) => {
      state.timeRange = action.payload;
    }
  }
});

export const { setStatus, setCategory, setTimeRange } = filtersSlice.actions;
export default filtersSlice.reducer;
