import { Box, Paper, Typography } from "@mui/material";
import {
  CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis
} from "recharts";
import type { PerformancePoint } from "../types";

export default function PerformanceChart({ data }: { data: PerformancePoint[] }) {
  return (
    <Paper className="panel chart-panel" elevation={0}>
      <Box className="panel-heading">
        <Box>
          <Typography variant="h6">System Performance</Typography>
          <Typography className="panel-subtitle">Live response time and throughput</Typography>
        </Box>
        <span className="stream-pill">STREAMING</span>
      </Box>
      <Box className="chart-wrap" aria-label="System performance chart">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 12, left: -18, bottom: 0 }}>
            <CartesianGrid stroke="#1d3146" strokeDasharray="4 4" vertical={false} />
            <XAxis dataKey="time" stroke="#7690ad" tickLine={false} axisLine={false} />
            <YAxis stroke="#7690ad" tickLine={false} axisLine={false} />
            <Tooltip
              contentStyle={{ background: "#0d1b2b", border: "1px solid #21384f", borderRadius: 10 }}
              labelStyle={{ color: "#fff" }}
            />
            <Legend />
            <Line type="monotone" dataKey="response" name="Response ms" stroke="#49c7ff" strokeWidth={3} dot={false} isAnimationActive={false} />
            <Line type="monotone" dataKey="throughput" name="Throughput %" stroke="#39e6c4" strokeWidth={2} dot={false} isAnimationActive={false} />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Paper>
  );
}
