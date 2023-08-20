import type { NextPage } from "next";
import Container from "../components/Container";
import EmployeeTable from "../components/Employees/EmployeeTable";
import FilterEmployee from "../components/FilterQuery/EmployeeQueryFilter"



const Employees: NextPage = () => {
  return (
    <Container title="Employee List">
      <div className="pt-20">



        <h1 >Employees</h1>

        <FilterEmployee />

        <EmployeeTable />

      </div>
    </Container>
  );
};

export default Employees;
