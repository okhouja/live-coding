// Express setup
const express = require("express");
const router = express.Router();
// Model
const EmployeesData = require("../model/employeesModel");

// url  http:localhost:5000/employees
// Get all Employees
router.get("/", async (req, res) => {
  try {
    const employees = await EmployeesData.find();
    res.status(200).json(employees);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add employee
// url  http:localhost:5000/employees
/*{
name :"Omar",
age: 39,
add: "Hamburg"
}*/
router.post("/", async (req, res) => {
  const employees = new EmployeesData({
    name: req.body.name,
    age: req.body.age,
    add: req.body.add,
  });
  try {
    const newEmployee = await employees.save();
    res.status(201).json({ message: err.message });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// middleware
async function getEmployee(req, res, next) {
  let employee;
  try {
    //employee = await EmployeesData.findById(req.params.id)
    //   employee = await EmployeesData.find({ name: req.params.name });
    employee = await EmployeesData.findOne({ name: req.params.name });
    if (employee == null)
      return res.status(404).json({ message: "employess Not Found" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
  console.log(employee);
  res.employee = employee;
  next();
}

// Get one employee
// url http://localhost:5000/employees
router.get("/name", getEmployee, (req, res) => {
  res.status(200).json(res.employee);
});
module.exports = router;