import type { NextPage } from "next";
import Container from "../components/Container";
import EmployeeTable from "../components/Employees/EmployeeTable"


const Employees: NextPage = () => {
  return (
    <Container title="Employee List">
      <div>

    <EmployeeTable/>

      </div>
    </Container>
  );
};

export default Employees;
