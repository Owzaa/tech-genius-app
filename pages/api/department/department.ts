import { NextApiRequest, NextApiResponse } from "next";
import { Department } from "../../types";

const departments: Department[] = [
  { id: 1, name: "Department 1" },
  { id: 2, name: "Department 2" },
  { id: 3, name: "Department 3" }
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
    res.status(200).json({ departments });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
}
