import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private ds:DataService,private router:Router){

  }
  
  uname=""
  accNo=""
  psw=""

  register(){ 
 

    var uname=this.uname
    var accNO=this.accNo
    var psw=this.psw
 
   const result=this.ds.register(uname,accNO,psw)

   if(result){
    alert("register successfuly")

    this.router.navigateByUrl("")
   }
   else
   {
    alert("user already present")
   }

   
  }

}
