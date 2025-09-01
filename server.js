const express = require("express");
const app = express();
const PORT = 4000;

app.get("/", (req, res) => {
  res.json({ status: "ok", message: "Hello from API" });
});

app.get("/health", (req, res) => {
  res.json({ status: "ok", message: "Server is healthy" });
});

// โค้ดซ้ำซ้อนที่เพิ่มเข้ามาใหม่
app.get("/status", (req, res) => {
  res.json({ status: "ok", message: "Server is running" });
});

function logRequest(path) {
  // This function is a duplicate
  console.log(`Request received for: ${path}`);
  const unusedVar = "This is a smell";
}

// function logResponse(path) {
//   // This function is a duplicate
//   console.log(`Request received for: ${path}`);
//   const unusedVar = "This is a smell";
// }

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
