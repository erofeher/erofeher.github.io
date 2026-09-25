import { useEffect, useMemo, useState } from "react";
import { Alert, Box, CircularProgress, Container, Typography } from "@mui/material";
import RadarIcon from "@mui/icons-material/Radar";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import DnsIcon from "@mui/icons-material/Dns";
import SpeedIcon from "@mui/icons-material/Speed";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { fetchDashboard } from "./api/dashboardApi";
import Filters from "./components/Filters";
import KpiCard from "./components/KpiCard";
import LiveEvents from "./components/LiveEvents";
import PerformanceChart from "./components/PerformanceChart";
import type { PerformancePoint } from "./types";
import type { RootState } from "./store/store";
import "./App.css";

function App() {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["dashboard"],
    queryFn: fetchDashboard
  });
  const filters = useSelector((state: RootState) => state.filters);
  const [livePerformance, setLivePerformance] = useState<PerformancePoint[]>([]);

  useEffect(() => {
    if (data) setLivePerformance(data.performance);
  }, [data]);

  useEffect(() => {
    if (!data) return;
    const timer = window.setInterval(() => {
      setLivePerformance((current) => {
        const previous = current.at(-1) ?? { response: 84, throughput: 90, time: "" };
        const now = new Date();
        const point: PerformancePoint = {
          time: now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" }),
          response: Math.max(58, Math.min(118, previous.response + Math.round(Math.random() * 16 - 8))),
          throughput: Math.max(72, Math.min(99, previous.throughput + Math.round(Math.random() * 8 - 4)))
        };
        return [...current.slice(-9), point];
      });
    }, 2500);
    return () => window.clearInterval(timer);
  }, [data]);

  const filteredEvents = useMemo(() => {
    if (!data) return [];
    return data.events.filter((event) =>
      (filters.status === "ALL" || event.status === filters.status) &&
      (filters.category === "ALL" || event.category === filters.category)
    );
  }, [data, filters]);

  if (isLoading) {
    return <div className="state-screen"><CircularProgress /><span>Loading mission telemetry…</span></div>;
  }

  if (isError || !data) {
    return (
      <div className="state-screen">
        <Alert severity="error">Dashboard data could not be loaded.</Alert>
        <button className="retry-button" onClick={() => refetch()}>Try again</button>
      </div>
    );
  }

  return (
    <Box className="app-shell">
      <Container maxWidth="xl" className="dashboard">
        <header className="dashboard-header">
          <Box>
            <Typography className="eyebrow">MISSION CONTROL / OPERATIONS</Typography>
            <Typography component="h1" className="main-title">Real-Time Mission Analytics</Typography>
            <Typography className="subtitle">Live system monitoring, performance analytics, and operational alerts</Typography>
          </Box>
          <div className="live-status"><span className="status-dot" /> LIVE</div>
        </header>

        <section className="kpi-grid">
          <KpiCard label="Active Missions" value={String(data.activeMissions)} note="+2 today" tone="positive" icon={<RadarIcon />} />
          <KpiCard label="Critical Alerts" value={String(data.criticalAlerts)} note="Requires attention" tone="warning" icon={<WarningAmberIcon />} />
          <KpiCard label="Systems Online" value={`${data.systemsOnline}%`} note="24 of 25 operational" tone="positive" icon={<DnsIcon />} />
          <KpiCard label="Average Response" value={`${livePerformance.at(-1)?.response ?? data.averageResponse} ms`} note="-12 ms vs baseline" tone="positive" icon={<SpeedIcon />} />
        </section>

        <Filters />

        {data.criticalAlerts > 0 && (
          <Alert severity="warning" className="threshold-alert">
            {data.criticalAlerts} critical alerts require review. Live monitoring remains active.
          </Alert>
        )}

        <PerformanceChart data={livePerformance} />
        <LiveEvents events={filteredEvents} />

        <footer>
          Demo telemetry is simulated locally for portfolio purposes. No production or military data is used.
        </footer>
      </Container>
    </Box>
  );
}

export default App;
