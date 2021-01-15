import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloworldComponent } from './helloworld/helloworld.component';
import {DropdownModule} from 'primeng/dropdown';
import { ButtonModule } from "primeng/button";
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ViewModule } from './view/view.module';
import { HeaderComponent } from './layout/header/header.component';
import { EmployeesComponent } from './pages/employees/employees.component';
import {TableModule} from 'primeng/table';
import { EditComponent } from './pages/employees/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloworldComponent,
    HeaderComponent,
    EmployeesComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DropdownModule,
    ButtonModule,
    FormsModule,
    BrowserAnimationsModule,
    ViewModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
