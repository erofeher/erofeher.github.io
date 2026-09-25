import axios from "axios";
import type { DashboardSnapshot } from "../types";

const seed: DashboardSnapshot = {
  activeMissions: 12,
  criticalAlerts: 3,
  systemsOnline: 97,
  averageResponse: 84,
  performance: [
    { time: "10:00", response: 72, throughput: 81 },
    { time: "10:05", response: 78, throughput: 84 },
    { time: "10:10", response: 74, throughput: 87 },
    { time: "10:15", response: 89, throughput: 83 },
    { time: "10:20", response: 82, throughput: 90 },
    { time: "10:25", response: 94, throughput: 92 },
    { time: "10:30", response: 84, throughput: 94 }
  ],
  events: [
    { id: 1, time: "14:32:18", source: "SYSTEM-04", category: "System", status: "ONLINE", message: "Telemetry stream restored" },
    { id: 2, time: "14:32:16", source: "SENSOR-12", category: "Sensor", status: "WARNING", message: "Signal variance above baseline" },
    { id: 3, time: "14:32:11", source: "SYSTEM-08", category: "System", status: "CRITICAL", message: "Response threshold exceeded" },
    { id: 4, time: "14:31:58", source: "NETWORK-02", category: "Network", status: "ONLINE", message: "Route health verified" },
    { id: 5, time: "14:31:43", source: "SENSOR-03", category: "Sensor", status: "ONLINE", message: "Calibration completed" },
    { id: 6, time: "14:31:31", source: "NETWORK-07", category: "Network", status: "WARNING", message: "Packet loss at 2.4%" }
  ]
};

const client = axios.create({
  baseURL: "/api",
  timeout: 2500,
  adapter: async (config) => {
    await new Promise((resolve) => setTimeout(resolve, 650));
    if (config.url === "/dashboard") {
      return {
        data: seed,
        status: 200,
        statusText: "OK",
        headers: {},
        config
      };
    }
    throw new Error("Mock endpoint not found");
  }
});

export async function fetchDashboard(): Promise<DashboardSnapshot> {
  const { data } = await client.get<DashboardSnapshot>("/dashboard");
  return data;
}
