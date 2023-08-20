

export interface Manager {
  name: string;
  surname: string;
}



// Employee Interface
export default interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  telephoneNumber: string;
  employeeEmail: string;
  manager: string;
  employeeStatus: string
}
