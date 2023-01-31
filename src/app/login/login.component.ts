import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  data = "your perfect banking partner"                                    // string interpollation  {{}}

  inputplaceholder = "Account number"                                         //property Binding

  // acno = ""
  // pass = ""

  userDetails: any = {

    1000: { acno: 1000, username: "anu", password: "abc123", balance: 0 },
    1001: { acno: 1001, username: "amal", password: "abc123", balance: 0 },
    1003: { acno: 1001, username: "arun", password: "abc123", balance: 0 },
    1004: { acno: 1001, username: "akil", password: "abc123", balance: 0 },

  }
  constructor() { }

  // login() {

  //   var acnum = this.acno
  //   var pasw = this.pass
  //   var userDetails1 = this.userDetails                                                       //event Binding

  //   if (acnum in userDetails1) {
  //     if (pasw == userDetails1[acnum]["password"]) {

  //       alert("login successfully")
  //     } else {
  //       alert("incorect password")
  //     }

  //   } else {
  //     alert("incorect username or not registered")
  //   }
  // }
  // acnoChange(event: any) {
  //   this.acno = event.target.value
  //   // console.log(this.acno);

  // }
  // passChange(event: any) {
  //   this.pass = event.target.value
  //   // console.log(this.pass);

  // }



  login(a:any,b:any) {

    var acnum = a.value
    var pasw = b.value
    var userDetails1 = this.userDetails                        //event Binding

    if (acnum in userDetails1) {
      if (pasw == userDetails1[acnum]["password"]) {

        alert("login successfully")
      } else {
        alert("incorect password")
      }

    } else {
      alert("incorect username or not registered")
    }
  }
}
