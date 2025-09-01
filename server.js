const express = require("express");
const app = express();
const PORT = 4000;

app.get("/", (req, res) => {
  res.json({ status: "ok", message: "Hello from API" });
});

function logRequest(path) {
  console.log(`Request received for: ${path}`);
}

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
