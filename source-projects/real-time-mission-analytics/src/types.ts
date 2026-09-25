export type Status = "ONLINE" | "WARNING" | "CRITICAL";

export interface MissionEvent {
  id: number;
  time: string;
  source: string;
  category: "System" | "Sensor" | "Network";
  status: Status;
  message: string;
}

export interface PerformancePoint {
  time: string;
  response: number;
  throughput: number;
}

export interface DashboardSnapshot {
  activeMissions: number;
  criticalAlerts: number;
  systemsOnline: number;
  averageResponse: number;
  performance: PerformancePoint[];
  events: MissionEvent[];
}
