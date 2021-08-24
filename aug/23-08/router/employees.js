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
"name" :"Omar",
"age": 39,
"add": "Hamburg"
}*/
router.post("/", async (req, res) => {
  const employee = new EmployeesData({
    name: req.body.name.toLowerCase(),
    age: req.body.age,
    add: req.body.add,
  });
  try {
    const newEmployee = await employee.save();
    console.log("newEmployee");
    res.status(201).json({ newEmployee });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Middleware
async function getEmployee(req, res, next) {
  let employee;
  try {
    //  employee = await EmployeesData.findById(req.params.id)
    //  employee = await EmployeesData.find({ name: req.params.name });

    employee = await EmployeesData.findOne({
      name: req.params.name.toLowerCase(),
    });
    if (employee == null)
      return res.status(404).json({ message: "employee Not Found" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
  console.log(employee);
  res.employee = employee;
  next();
}

// Get one employee
// url http://localhost:5000/employees/Omar
router.get("/:name", getEmployee, (req, res) => {
  res.status(200).json(res.employee);
});

// GET http://localhost:5000/employees get all employees
// GET http://localhost:5000/employees/:name get one employee
// POST http://localhost:5000/employees add new employee
// DELETE http://localhost:5000/employees/:name delete one employee by name (later will be by id)
// UPDATE http://localhost:5000/employees/:name one employee updated by name (later will be by id)

module.exports = router;
