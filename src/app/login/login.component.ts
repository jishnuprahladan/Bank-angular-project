import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router:Router,private ds:DataService) { }

  data = "your perfect banking partner"                                    // string interpollation  {{}}

  inputplaceholder = "Account number"                                         //property Binding

  acno = ""
  pass = ""

  

  login() {

    var acnum = this.acno
    var pasw = this.pass
    
   const result=this.ds.Login(acnum,pasw)

   if(result){
    alert("login successfully")

    this.router.navigateByUrl("dashboard")
   }
   else{
    alert("incorect ac NO pr password")
   }

  }
 
}
