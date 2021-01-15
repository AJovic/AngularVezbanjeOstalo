import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees: any[] = [];
  constructor(private employeeServices:EmployeeService) { }

  ngOnInit(): void {
    var x =this.employeeServices.onGet();
   this.employees = x;
  }

  onDelete(id:number){
    this.employeeServices.onDelete(id);
  }
}
