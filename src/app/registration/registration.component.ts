import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SevenmService } from '../sevenm.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers:[ SevenmService ],
})
export class RegistrationComponent implements OnInit {

  registerForm:FormGroup;
  constructor(f:FormBuilder , private _ser:SevenmService, private router:Router) {
	this.registerForm= f.group({
		"fname":[],
		"lname":[],
		"contact":[],
		"email":[],
		"pwd":[],
		"rpwd":[],
	});
	
  }

  ngOnInit() {
  }
 
  onRegister(formData){
	  this._ser.Register(formData).subscribe((data)=>{console.log(data)});
	  console.log(formData);
	  this.router.navigate(['/Login']);
  }
  
  
}
