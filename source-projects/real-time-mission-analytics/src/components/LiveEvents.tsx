import { Chip, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import type { MissionEvent } from "../types";

const statusColor = {
  ONLINE: "success",
  WARNING: "warning",
  CRITICAL: "error"
} as const;

export default function LiveEvents({ events }: { events: MissionEvent[] }) {
  return (
    <Paper className="panel events-panel" elevation={0}>
      <div className="panel-heading">
        <div>
          <Typography variant="h6">Live Events</Typography>
          <Typography className="panel-subtitle">{events.length} events match the current filters</Typography>
        </div>
      </div>
      {events.length === 0 ? (
        <div className="empty-state">No events match the selected filters.</div>
      ) : (
        <TableContainer>
          <Table size="small" aria-label="Live mission events">
            <TableHead>
              <TableRow>
                <TableCell>Time</TableCell>
                <TableCell>Source</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Message</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {events.map((event) => (
                <TableRow key={event.id} hover>
                  <TableCell>{event.time}</TableCell>
                  <TableCell className="source-cell">{event.source}</TableCell>
                  <TableCell>{event.category}</TableCell>
                  <TableCell><Chip size="small" label={event.status} color={statusColor[event.status]} variant="outlined" /></TableCell>
                  <TableCell>{event.message}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Paper>
  );
}
