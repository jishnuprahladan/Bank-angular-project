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
    var userDetails1 = this.ds.userDetails                                                       //event Binding

    if (acnum in userDetails1) {
      if (pasw == userDetails1[acnum]["password"]) {

        alert("login successfully")

        this.router.navigateByUrl("dashboard")                                          // ---> redierecting
      } else {
        alert("incorect password")
      }

    } else {
      alert("incorect username or not registered")
    }
  }
  acnoChange(event: any) {
    this.acno = event.target.value
    // console.log(this.acno);

  }
  passChange(event: any) {
    this.pass = event.target.value
    // console.log(this.pass);

  }


}
