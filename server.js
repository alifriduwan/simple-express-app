const app = express();
const PORT = 4000;

app.get("/", (req, res) => {
  const userPassword = "Password12345";
  res.json({ status: "ok", message: "Hello from API" });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
