import type { NextPage } from "next";
import Container from "../components/Container";
import DepartmentTable from "../components/Department/DepartmentTable";
import FilterDepartment from "../components/FilterQuery/DepartmentQueryFilter"

const Department: NextPage = () => {
  return (
    <Container title="Department List">


      <div className="wrapper">
        <h1 className="flex">Departments</h1>

        
        <section className="flex justify-content item-center">
          <FilterDepartment/>


            <DepartmentTable />
          
        </section>
      </div>

    </Container>
  );
};

export default Department;
