import { Box, Paper, Typography } from "@mui/material";
import type { ReactNode } from "react";

interface Props {
  label: string;
  value: string;
  note: string;
  tone?: "normal" | "warning" | "positive";
  icon: ReactNode;
}

export default function KpiCard({ label, value, note, tone = "normal", icon }: Props) {
  const noteColor = tone === "warning" ? "#ffbd3d" : tone === "positive" ? "#39e6c4" : "#8da6c4";
  return (
    <Paper className="kpi-card" elevation={0}>
      <Box className="kpi-top">
        <Typography className="kpi-label">{label}</Typography>
        <Box className="kpi-icon">{icon}</Box>
      </Box>
      <Typography className="kpi-value">{value}</Typography>
      <Typography className="kpi-note" sx={{ color: noteColor }}>{note}</Typography>
    </Paper>
  );
}
