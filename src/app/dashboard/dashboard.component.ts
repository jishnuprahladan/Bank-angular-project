import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  user = ''
  acno: any
  psw: any
  amnt: any
  acno1: any
  psw1: any
  amnt1: any
  constructor(private ds: DataService) {
    this.user = this.ds.currentUser
  }
  Deposit() {
    var acno = this.acno
    var psw = this.psw
    var amnt = this.amnt
    var result = this.ds.Deposit(acno, psw, amnt)
    if (result) {
      alert(`your ac ha been creited with amount${amnt}. balance is ${result}`)
    }
    else {
      alert("incurect pass or accno")
    }
  }
  Withdraw() {
    var acno = this.acno1
    var psw = this.psw1
    var amnt = this.amnt1
    var result = this.ds.Withdraw(acno, psw, amnt)
    if (result) {
      alert(`your ac ha been debited with amount${amnt}. balance is ${result}`)
    }
  }
}
