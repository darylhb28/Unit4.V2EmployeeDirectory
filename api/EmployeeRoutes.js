import express from "express"
const router = express.Router()
import employees from "#db/employees";

router.route("/").get((req, res) => {
  res.send(employees);
});

router.route("/random").get((req, res) => {
  const randomIndex = Math.floor(Math.random() * employees.length);
  res.send(employees[randomIndex]);
});

router.route("/:id").get((req, res) => {
    const found = employees.find((employee)=>
        employee.id === Number(req.params.id))

  if (!found) {
    return res.status(404).send("Employee not found");
  }

  res.send(found);
});



export default router