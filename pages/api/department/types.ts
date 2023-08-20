export interface Manager {
    id:number;
    name: string
}

export interface Department {
  id: number;
  name: string;
  manager: Manager;
  status: boolean
}
