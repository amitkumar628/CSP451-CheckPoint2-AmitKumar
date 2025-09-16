// Simple REST API structure
const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/api/users", (req, res) => {
  res.json([{id:1, username:"amit"}, {id:2, username:"john"}]);
});

app.listen(PORT, () => console.log("API running on port", PORT));
