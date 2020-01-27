import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentsComponent } from './departments/departments.component';
import { EmployeesComponent } from './employees/employees.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';


const routes: Routes = [{path:'',component:MainComponent,pathMatch:'full'},
  {path:'departments',component:DepartmentsComponent},
  {path:'departments/:id',component:DepartmentDetailComponent},
{path:'employees',component:EmployeesComponent},
{path:'**',component:PageNotFoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
