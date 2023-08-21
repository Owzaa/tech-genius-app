import {clientPromise} from "../../database/mongoDB";
import { employeeDB } from "../../database/employeeDB";

const data = [
  {
    id: 1,
    firstName: "TestName",
    lastName: "TestSurname",
    telephoneNumber: "0821111111",
    employeeEmail: "test@test.com",
    manager: "",
    employeeStatus: "Active"
  },
  {
    id: 2,
    firstName: "TestNameOne",
    lastName: "TestSurnameOne",
    telephoneNumber: "0721111111",
    employeeEmail: "test1@test.com",
    manager: "TestName TestSurname",
    employeeStatus: "Active"
  },
  {
    id: 3,
    firstName: "TestNameTwo",
    lastName: "TestSurnameTwo",
    telephoneNumber: "083222222",
    employeeEmail: "test2@test.com",
    manager: "TestName TestSurname",
    employeeStatus: "Active"
  }
];


// Access MongoDB Client Connection: EmployeesDB
export default async function handler(req,res) {
  
  const client = await clientPromise;
  const db = client.db(employeeDB);


  // POST: Employee{id}
  switch (req.method) {
    case "POST":
    let bodyObject = JSON.parse(req.body);
    let Employee = await db.collection("employeeList").insertOne(bodyObject);
    res.json(Employee.ops[0]);
    break;


  // GET: Employees(All)
    case "GET":
    const allEmployees = await db.collection("employeeList").find({}).toArray();
    res.json({ status: 200, data: allEmployees});
    break;  


  // DELETE: Employee(id)
    case "DELETE":
    const employeeId = req.query.id;
    const employeeDB = await db.collection(`employeeList/${employeeId}`).deleteOne({_id: employeeId});
   
    res.status(200).json({ message: "Employee deleted successfully", data: employeeDB});

  } 
}



