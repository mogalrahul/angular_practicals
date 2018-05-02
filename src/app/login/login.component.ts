import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  registerForm:FormGroup;
  constructor(f:FormBuilder) {
	  this.registerForm=f.group({
		  "fname":[],
		  "lname":[],
		  "pwd":[],
	  });
	  
  }

  ngOnInit() {
  }
   onLogin(data){
	   console.log("hi");
	   console.log(data);
   }

}
