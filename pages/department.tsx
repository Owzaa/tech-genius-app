import type { NextPage } from "next";
import Container from "../components/Container";
import DepartmentTable from "../components/Department/DepartmentTable"


const Department: NextPage = () => {
  return (
    <Container title="Department List">
      <div>

        <DepartmentTable />

      </div>
    </Container>
  );
};

export default Department;
