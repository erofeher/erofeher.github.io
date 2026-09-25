# Real-Time Mission Analytics Dashboard

**Live demo:** https://erofeher.github.io/real-time-mission-analytics-dashboard/

A portfolio front-end project inspired by real-time operational analytics interfaces. All telemetry and events are fictional and simulated locally.

## Tech stack

- React 19 + TypeScript
- Vite
- Material UI
- Redux Toolkit + React Redux
- TanStack React Query
- Axios with a local mock adapter
- Recharts
- Jest + React Testing Library

## Features

- Responsive mission-control UI
- KPI cards for operational metrics
- Simulated live performance updates every 2.5 seconds
- Interactive Recharts visualization
- Redux-powered status/category/time filters
- Live event table
- Threshold warning
- Loading, error, and empty states
- Component test example
- Mock REST-style data layer through Axios

## Run locally

```bash
npm install
npm run dev
```

On Windows PowerShell, if script execution blocks `npm`, use:

```powershell
npm.cmd install
npm.cmd run dev
```

Open the local URL shown by Vite, normally `http://localhost:5173`.

## Build

```bash
npm run build
```

## Test

```bash
npm test
```

## Portfolio description

**Real-Time Mission Analytics Dashboard — React/TypeScript**

Built a responsive real-time analytics dashboard using React, TypeScript, Redux Toolkit, TanStack React Query, Axios, Material UI, and Recharts. Implemented simulated live telemetry, filtering, operational alerts, responsive data visualization, a mock REST-style data layer, and component testing.

## Data notice

This project uses fictional demo data only. It does not connect to or represent any real military, customer, or production system.

## Deployment

A GitHub Actions workflow is included in `.github/workflows/deploy-pages.yml`. Push the project to a public repository named `real-time-mission-analytics-dashboard`, then set **Settings → Pages → Source** to **GitHub Actions**. The workflow builds, tests, and deploys the app automatically.
