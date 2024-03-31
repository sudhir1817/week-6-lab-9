const express = require("express");
const app = express();

const connectDB = require("./db");
const {
  getorders,
  addOrder,
  getorder,
  deleteAllorders,
} = require("./controller");

//Important: will be discussed next week
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
// GET all orders
app.get("/orders", getorders);

// POST a new Goal
app.post("/orders", addOrder);

// GET a single Goal
app.get("/orders/:id", getorder);

// Update Goal using PUT

// DELETE a Goal

// DELETE all Goal
app.delete("/orders", deleteAllorders);

const PORT = 4000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});