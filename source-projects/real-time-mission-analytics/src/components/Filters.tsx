import { FormControl, InputLabel, MenuItem, Paper, Select, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { setCategory, setStatus, setTimeRange, type CategoryFilter, type StatusFilter, type TimeRange } from "../store/filtersSlice";

export default function Filters() {
  const filters = useSelector((state: RootState) => state.filters);
  const dispatch = useDispatch();

  return (
    <Paper className="filters" elevation={0}>
      <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
        <FormControl size="small" className="filter-control">
          <InputLabel>Time range</InputLabel>
          <Select value={filters.timeRange} label="Time range" onChange={(e) => dispatch(setTimeRange(e.target.value as TimeRange))}>
            <MenuItem value="15M">Last 15 min</MenuItem>
            <MenuItem value="1H">Last hour</MenuItem>
            <MenuItem value="24H">Last 24 hours</MenuItem>
          </Select>
        </FormControl>
        <FormControl size="small" className="filter-control">
          <InputLabel>Status</InputLabel>
          <Select value={filters.status} label="Status" onChange={(e) => dispatch(setStatus(e.target.value as StatusFilter))}>
            <MenuItem value="ALL">All statuses</MenuItem>
            <MenuItem value="ONLINE">Online</MenuItem>
            <MenuItem value="WARNING">Warning</MenuItem>
            <MenuItem value="CRITICAL">Critical</MenuItem>
          </Select>
        </FormControl>
        <FormControl size="small" className="filter-control">
          <InputLabel>Category</InputLabel>
          <Select value={filters.category} label="Category" onChange={(e) => dispatch(setCategory(e.target.value as CategoryFilter))}>
            <MenuItem value="ALL">All categories</MenuItem>
            <MenuItem value="System">System</MenuItem>
            <MenuItem value="Sensor">Sensor</MenuItem>
            <MenuItem value="Network">Network</MenuItem>
          </Select>
        </FormControl>
      </Stack>
    </Paper>
  );
}
