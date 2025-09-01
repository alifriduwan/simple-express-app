const express = require("express");
const app = express();
const PORT = 4000;

function isComplex(a, b, c, d) {
  if (a) {
    for (let i = 0; i < b; i++) {
      if (c) {
        if (d) {
          return true;
        }
      }
    }
  }
  return false;
}

app.get("/", (req, res) => {
  const result = isComplex(true, 1, true, true);
  res.json({ status: "ok", message: `Complex result: ${result}` });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
