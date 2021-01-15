import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloworldComponent } from './helloworld/helloworld.component';
import { EditComponent } from './pages/employees/edit/edit.component';
import { EmployeesComponent } from './pages/employees/employees.component';


const routes: Routes = [
  {
    path: '',
     component: EmployeesComponent
  },
  {
    path: 'hello', 
    component: HelloworldComponent
  },
  {
    path: "employee/edit/:id", 
    component: EditComponent
  },
  {
    path: "employee/add/:id", 
    component: EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
