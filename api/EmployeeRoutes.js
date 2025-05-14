import express from "express"
const router = express.Router()
import employees from "#db/employees";
import { addEmployee } from "#db/employees";

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

router.route("/").post((req, res)=> {
    const { name } = req.body

    if (!name){
       return res.status(400).send("No name provided")
    }

    if (typeof (name) !== `string`){
        return res.status(400).send("Please provide a valid name")
    }

    addEmployee(name)
    res.status(201).send(`${name} added!`)

})

export default router