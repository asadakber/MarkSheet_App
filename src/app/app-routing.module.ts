import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MarksheetComponent } from './components/marksheet/marksheet.component';
import { MarklistComponent } from './components/marklist/marklist.component';
import { MarkdetailsComponent } from './components/markdetails/markdetails.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'register',
    component: RegisterComponent
  },

  {
    path: 'dashboard',
    component: DashboardComponent
  },

  {
    path: 'marksheet',
    component: MarksheetComponent
  },

  {
    path: 'marklist',
    component: MarklistComponent
  },

  {
    path: 'markdetails/:id',
    component: MarkdetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
