---
title: "Screenshots"
description: BlueUPALM frontend screenshot gallery
---

# Screenshots — BlueUPALM

Screenshot gallery of the BlueUPALM frontend, the anti-money laundering analysis and detection platform. The design follows the **BlueUP Dark Glassmorphism** visual system: dark canvas, glass surfaces with backdrop-blur, blue→violet gradients, and micro-animations.

## Login

Access screen with entity selection and Windows domain authentication.

![Login — BlueUPALM](/images/bc/login.png)

- Glass card with `backdrop-filter: blur(20px)` and subtle border
- Animated decorative orbs (blue and violet) with `animation: float 8s infinite`
- Primary button with gradient `#2563eb → #7c3aed`
- BlueUP branding in footer

---

## Main Dashboard

Main view with operational KPIs and AML alert visual analytics.

![Dashboard — BlueUPALM](/images/bc/dashboard.png)

- **4 KPI cards** with hover glow and trend indicators
- **Alerts by Indicator** — grouped bar chart (Recharts)
- **Risk Segmentation Evolution** — stacked area (High/Medium/Low)
- **Alert Evolution** — line chart with dots

---

## Clients — Risk Profiles

High-density data grid with client risk profiles, classified by segment.

![Clients — Risk Profiles](/images/bc/clients-risk-profiles.png)

- Sidebar with hierarchical navigation (Policyholder, Insured, Primary, Secondary)
- Risk dots with semantic colors (🔴 High, 🟠 Medium, 🟢 Low)
- Status, diligence, and weight variation indicators
- Data grid with glass headers and blue hover states

---

## Alerts — Dashboard

Alert distribution by area and comparative analysis.

![Alerts — Dashboard](/images/bc/alerts-dashboard.png)

- **Distribution by Area** — pie chart (Continuous Monitoring, Payment Methods, Client Typology)
- **Alerts by Area - Analysis** — grouped bars (Analyzed vs Unanalyzed vs Client Count)
- Gradient CTA button for detailed listing access

---

## SEPBLAC Communications

Operational dashboard for communications to the Executive Service.

![Communications](/images/bc/communications.png)

- **Reportable Operations** — comparative bars by indicator
- **ECV Distribution** — pie chart with proportions (Associated DMO, Generated, Pending)
- **Reportable Operations Evolution** — timeline with dots

---

## Administration — Indicators

Master table of entity-configurable alert indicators.

![Administration — Indicators](/images/bc/admin-indicators.png)

- 9 SEPBLAC indicators with area, frequency, and pattern
- Collapsible admin sidebar sections
- Entity activation checkmarks
- Integrated pagination and filters

---

## Visual Design

The frontend is built with:

| Component | Technology |
|-----------|-----------|
| **Framework** | React 18 + Vite |
| **Routing** | react-router-dom v7 |
| **Charts** | Recharts |
| **Styling** | Vanilla CSS (design tokens) |
| **Font** | Inter (Google Fonts) |
| **Design System** | BlueUP Dark Glassmorphism |

### Key Design Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--canvas` | `#030712` | Main background |
| `--glass-surface` | `rgba(255,255,255,0.03)` | Glass surfaces |
| `--glass-border` | `rgba(255,255,255,0.06)` | Subtle borders |
| `--brand-gradient` | `#2563eb → #7c3aed` | Primary gradient |
| `--risk-high` | `#ef4444` | High risk |
| `--risk-medium` | `#f59e0b` | Medium risk |
| `--risk-low` | `#22c55e` | Low risk |
