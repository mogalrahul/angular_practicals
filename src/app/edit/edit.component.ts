import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SevenmService } from '../sevenm.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { NgZone } from '@angular/core';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers:[ SevenmService ]
})
export class EditComponent implements OnInit {

  editForm:FormGroup;
  result:any;
  constructor(f:FormBuilder , private _ser:SevenmService, private router:Router,private ar:ActivatedRoute) {
	this.editForm= f.group({
		"fname":[],
		"lname":[],
		"contact":[],
		"email":[],
		"pwd":[],
		"id":[],
	});	
  }
  id:any;
  ngOnInit() {
	  this.ar.params.subscribe((param)=>{
		  this.id=param.id;
		  this._ser.view(param.id).subscribe((data)=>{this.result=data});
	  });
  }
 
  onEdit(formData,id){
	  this._ser.editCust(formData,id).subscribe((data)=>{console.log(data)});
	  console.log(formData);
	  this.router.navigate(['/ShowTable']);
  }

}
