import type { NextPage } from "next";
import Container from "../components/Container";
import CreateEmployee from '../components/Employees/CreateEmployee';
import EmployeeTable from "../components/Employees/EmployeeTable";
import FilterEmployee from "../components/FilterQuery/EmployeeQueryFilter"



const CreateNewEmployee: NextPage = () => {
  return (
    <Container title="Create New Employee">
      <div className="pt-20">



        <h1>Create New Employee</h1>

        <CreateEmployee/>

      </div>
    </Container>
  );
};

export default CreateNewEmployee;
