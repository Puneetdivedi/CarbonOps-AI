<div align="center">
  <h1>🏭 CarbonOps AI Studio</h1>
  <p><strong>Universal Industrial AI OS & Predictive Enterprise Platform</strong></p>
</div>

<p align="center">
  <img src="https://img.shields.io/badge/React-18-blue.svg" alt="React" />
  <img src="https://img.shields.io/badge/Vite-5.0-purple.svg" alt="Vite" />
  <img src="https://img.shields.io/badge/Architecture-Clean%20Code-success.svg" alt="Architecture" />
  <img src="https://img.shields.io/badge/GenAI-LangGraph%20Ready-orange.svg" alt="GenAI" />
</p>

---

## 📖 Overview

**CarbonOps AI Studio** is not a standard monitoring dashboard—it is a production-grade, Universal Industrial AI Operating System designed for massive manufacturing plants, heavy industry, and energy infrastructure. 

It takes messy live IoT telemetry (temperature, pressure, vibration, CO2 emissions) and feeds it into an orchestrated **Multi-Agent AI Brain**. Instead of humans analyzing graphs, specialized AI agents automatically detect anomalies, diagnose root causes using RAG (Retrieval-Augmented Generation) against technical manuals, and autonomously draft SAP Maintenance Work Orders for human approval.

## ✨ Core Enterprise Features

### 🚀 1. Hardware Simulation & IoT Telemetry
- The app features a **Live Hardware Simulator** built natively into the UI. Toggle between *Normal Operations*, *Bearing Wear*, *Pressure Spikes*, and *Emission Leaks* to see how the system reacts in real-time to chaotic data inputs.
- Tracks universal baseline KPIs: **OEE (Overall Equipment Effectiveness)**, **MTBF (Mean Time Between Failures)**, and financial cost-savings.

### 🧠 2. Explainable AI (XAI) & Human-In-The-Loop Workflow
- Unlike traditional black-box AI, CarbonOps provides a **Reasoning Trace** for every anomaly. 
- Clicking **"View Diagnosis"** reveals dynamically generated explanations outlining *What Happened*, *Why it Happened (Root Cause)*, and the *Supporting Telemetry Signals* that triggered the alert, alongside a calculated Confidence Percentage.
- **Workflow Approvals**: Generated maintenance SAP tickets remain locked in a `[Pending Approval]` state until a Plant Manager explicitly approves them via the UI.

### 🤖 3. Factory Copilot (Conversational GenAI)
- An embedded generative chatbot capable of answering deep telemetry and operational questions on the fly. 
- You can query it dynamically: *"Why did the turbine fail?"* or *"What is our ESG compliance status?"* and it synthesizes real-time dashboard data using mock RAG principles.

### 🏢 4. Multi-Tenant Cross-Plant Benchmarking
- Built with a true SCADA / ERP architecture supporting Organization → Site → Plant → Line → Machine hierarchies. Includes benchmarking modules ranking different plants based on OEE and downtime.

---

## 🛠 Clean Code Architecture

This project strictly adheres to **Clean Code** principles, decoupling presentation from business logic and data ingestion.

```text
src/
├── api/             # (Prepared) REST / GraphQL endpoint definitions for IoT streams
├── components/      # Isolated, highly modular, reusable UI (e.g., EmissionsChart, MetricCard)
├── context/         # (Prepared) React Context providers for global auth and theming
├── data/            # Mock schemas (site hierarchies, XAI datasets, simulated APIs)
├── hooks/           # Custom React hooks for telemetry interval pooling & auth logic
├── layouts/         # Structural wrappers mapping the overarching SCADA navigation
├── pages/           # Dedicated route views (Dashboard, Assets, Maintenance, ESG, Audit)
├── services/        # (Prepared) Middle-tier business logic and LangGraph API connections
├── utils/           # Data generators, Kalman filters, and noise simulating functions
└── App.jsx          # React Router root orchestrator
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Puneetdivedi/CarbonOps-AI.git
   ```
2. Navigate to the directory:
   ```bash
   cd "CarbonOps AI"
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the interactive Vite development server:
   ```bash
   npm run dev
   ```

*The application will boot up (typically at `http://localhost:5173` or `5174`). Interact with the **Hardware Fault Simulator** on the top right to watch the real-time AI agents respond!*

---
**Prepared uniquely for seamless integration natively with Python / FastAPI / LangGraph backend schemas.**
