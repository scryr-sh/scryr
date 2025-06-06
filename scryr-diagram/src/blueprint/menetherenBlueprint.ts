import {
  Blueprint,
  Deployment,
  Framework,
  Language,
} from "./blueprintTypes.ts";

// Define the ScryrComponent instances based on menetheren.json
const authService = new Blueprint({
  name: "Auth Service",
  icon: "🔒",
  description: "Handles user authentication",
  version: "1.2.0",
  language: Language.Python,
  frameworks: [Framework.Django],
  deployment: Deployment.ECS,
  sourceCodeUrl: "https://github.com/example/auth-service",
  connections: [],
  links: ["https://auth.example.com"],
  docs: ["https://docs.example.com/auth"],
});

const frontEndApp = new Blueprint({
  name: "FrontEnd Core",
  icon: "🌐",
  description: "The user-facing web frontend",
  version: "2.0.1",
  language: Language.Perl,
  frameworks: [Framework.Meteor],
  deployment: Deployment.Lambda,
  sourceCodeUrl: "https://github.com/example/frontend",
  connections: [authService],
  links: ["https://www.example.com"],
  docs: ["https://docs.example.com/frontend"],
});

const backEndApp = new Blueprint({
  name: "Servicability",
  icon: "⚙️",
  description: "The backend service for data processing",
  version: "3.1.0",
  language: Language.Java,
  frameworks: [Framework.Spring],
  deployment: Deployment.ECS,
  sourceCodeUrl: "https://github.com/example/backend",
  connections: [frontEndApp],
  links: ["https://api.example.com"],
  docs: ["https://docs.example.com/backend"],
});

const dataOrchestratorApp = new Blueprint({
  name: "Airflow",
  icon: "🍃",
  description: "Data Job runners",
  version: "1.9.0",
  language: Language.Python,
  frameworks: [Framework.Angular],
  deployment: Deployment.Kubernetes,
  sourceCodeUrl: "https://github.com/example/airflowd",
  connections: [backEndApp, frontEndApp],
  links: ["https://api.example.com"],
  docs: ["https://docs.example.com/backend"],
});

export const menetherenBlueprints: Blueprint[] = [
  frontEndApp,
  authService,
  backEndApp,
  dataOrchestratorApp,
];
