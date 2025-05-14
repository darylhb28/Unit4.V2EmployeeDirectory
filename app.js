import express from "express";
const app = express();
export default app;

import employees from "#db/employees";

import employeeRouter from "#api/EmployeeRoutes";

app.route("/").get((req, res) => {
  res.send("Hello employees!");
});

app.use("/employees", employeeRouter)


app.use((err, req, res, next)=>{
  console.log(err)
  res.status(500).send(`The following error occured: ${err}`)
})
