import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { TransactonComponent } from './transacton/transacton.component';

const routes: Routes = [
  {path:"",component:LoginComponent},                                                            //adding routing path redirect path
  {path:"dashboard",component:DashboardComponent},
  {path:"register",component:RegisterComponent},
  {path:"transaction",component:TransactonComponent}        
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
