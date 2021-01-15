import { Injectable } from '@angular/core';
import {Employee} from "../models/employee.model"

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees: Employee[] = [
    {
      id:1,
      name:"Aleksandar",
      email:"asad@dasd.com",
      phone:123
    },
    {
      id:2,
      name:"Aleksanda2",
      email:"asad@dasd.com",
      phone:123
    }
  ]
  constructor() { 
  }

  onGet():Employee[]{
    return this.employees;
  }

  onAdd(employee:Employee){
    this.employees.push(employee)
  }

  onDelete(id:Number){
    alert("Obrisano")
  //  const employee1 = this.employees.find(x => x.id === id);
  //  const index: number = this.employees.indexOf(employee1);
  //  if (index !== -1) {
  //      this.employees.splice(index, 1);
  //  }  
  }

  onGetEmployee(id:Number){
    return this.employees.find(x=> x.id === id)
  }
}
