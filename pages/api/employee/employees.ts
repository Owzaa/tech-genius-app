import { NextApiRequest, NextApiResponse } from "next";
import { Employee } from "../../types";

const employee: Employee[] = [
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

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    handleGetRequest(req, res);
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}

function handleGetRequest(req: NextApiRequest, res: NextApiResponse) {
  try {
    res.status(200).json({ employee });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
}
