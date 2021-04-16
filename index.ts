import express from "express";
import cors from "cors";

const app = express();
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
app.use(cors());
app.use(express.json());

app.get("/api/ping", (_req, res) => {
  console.log("Someone pinged");
  res.send("pong");
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});