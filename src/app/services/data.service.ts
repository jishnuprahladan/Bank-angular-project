import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() { }
  userDetails: any = {
    1000: { acno: 1000, username: "anu", password: "abc123", balance: 0  ,transactions: []},
    1001: { acno: 1001, username: "amal", password: "abc123", balance: 0 ,transactions: []},
    1003: { acno: 1001, username: "arun", password: "abc123", balance: 0 ,transactions: []},
    1004: { acno: 1001, username: "akil", password: "abc123", balance: 0 ,transactions: []},
  }
  currentUser = ""
  currentAcno=""
  register(uname: any, acno: any, pass: any) {
    if (acno in this.userDetails) {
      return false
    }
    else {
      this.userDetails[acno] = { acno, username: uname, password: pass, balance: 0 }
      console.log(this.userDetails)
      return true
    }
  }
  Login(acno: any, psw: any) {
    var userDetails1 = this.userDetails                                                       //event Binding
    if (acno in userDetails1) {
      if (psw == userDetails1[acno]["password"]) {
        this.currentUser = userDetails1[acno].username
        this.currentAcno=acno
        // console.log(this.currentUser);
        return true                                         // ---> redierecting
      } else {
        return false
      }
    } else {
      return false
    }
  }
  Deposit(acnum: any, password: any, amount: any) {
    let userDetails = this.userDetails
    var amnt = parseInt(amount)                                 //convert string to intiger
    if (acnum in userDetails) {
      if (password == userDetails[acnum]["password"]) {
        var balance = userDetails[acnum]["balance"] += amnt

        userDetails[acnum]["transactions"].push({TYPE:"CREDIT",Amount:amnt})             //transaction history
        return balance
      } else {
        return false
      }
    }
    else {
      return false
    }
  }
  Withdraw(acnum: any, password: any, amount: any) {
    let userDetails = this.userDetails
    var amnt = parseInt(amount)
    if (acnum in userDetails) {
      if (password == userDetails[acnum]["password"]) {
        if (amnt <= userDetails[acnum]["balance"]) {
          var balance = userDetails[acnum]["balance"] -= amnt
          userDetails[acnum]["transactions"].push({TYPE:"DEBIT",Amount:amnt})                  //transaction history
          // console.log(this.userDetails);
          
          return balance
        }
        else {
          alert("insuficient balance")
          return false
        }
      } else {
        alert("incorect password")
        return false
      }
    }
    else {
      alert("incorect accNo")
      return false
    }
  }
  gettransaction(acno:any){
    return this.userDetails[acno]["transactions"]
  }
}


