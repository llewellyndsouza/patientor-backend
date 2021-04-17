import express from "express";
import cors from "cors";

import diagnonsesData from "./src/data/diagnoses";

import patientService from "./src/services/patientService";

const app = express();
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
app.use(cors());
app.use(express.json());

app.get("/api/ping", (_req, res) => {
  console.log("Someone pinged");
  res.send("pong");
});

app.get("/api/diagnoses", (_req, res) => {
  res.send(diagnonsesData);
});

app.get("/api/patients", (_req, res) => {
  res.send(patientService.nonSensitivePatientData());
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
