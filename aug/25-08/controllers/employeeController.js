const EmployeesData = require("../model/employeesModel");
const express = require("express");

// Middleware
// only one
const getEmployee = async (req, res, next) => {
  let employee;
  try {
    // employee = await EmployeesData.findById(req.params.id);
    // employee = await EmployeesData.findBy(req.params.name);

    employee = await EmployeesData.findOne({ name: req.params.name });
    console.log(employee);
    if (employee == null) {
      // Not found
      return res.status(404).json({ message: "Sorry, Employee not found." });
    }
  } catch (error) {
    // 500 server
    res.status(500).json({ message: error.message });
  }
  res.employees = employees;
  next();
};
