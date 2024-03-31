const order = require("./model");

// get all orders
const getorders = async (req, res) => {
  const orders = await order.find({});
  res.status(200).json(orders);
};

// Add one order
const addOrder = async (req, res) => {
  const { customer, totalAmount, duration, products, status } = req.body;

  const neworder = new order({ customer, totalAmount, duration, products, status});
  await neworder.save();
  res.status(201).json(neworder);
};

// Get order by ID
const getorder = async (req, res) => {
  const { customer, totalAmount, duration, products, status } = req.params;

  const order = await order.findById(id);
  if (!order) {
    return res.status(404).json({ message: "order not found" });
  }
  res.status(200).json(order);
};

// Delete order by ID
const deleteorder = async (req, res) => {
  const { id } = req.params;

  const order = await order.findByIdAndDelete({ _id: id });
  if (!goal) {
    return res.status(404).json({ message: "order not found" });
  }
  res.status(200).json({ message: "order deleted successfully" });
};

// Delete all Books
const deleteAllorders = async (req, res) => {
  const result = await order.deleteMany({});
  res
    .status(200)
    .json({ message: `Deleted ${result.deletedCount} books successfully` });
};

// Update order by ID
const updateGoal = async (req, res) => {
  const { id } = req.params;
  const updatedorder = req.body;
  const order = await Goal.findOneAndUpdate({ _id: id }, updatedorder);
  if (!order) {
    return res.status(404).json({ message: "order not found" });
  }
  res.status(200).json(order);
};

module.exports = {
  getorders,
  addOrder,
  getorder,
  deleteAllorders,
};