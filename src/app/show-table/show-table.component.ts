import { Component, OnInit } from '@angular/core';
import { SevenmService } from '../sevenm.service';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-show-table',
  templateUrl: './show-table.component.html',
  styleUrls: ['./show-table.component.css'],
  providers:[ SevenmService ],
   
})
export class ShowTableComponent implements OnInit {
	editing:Boolean=false;
	indexx:any;
  constructor(private _ser:SevenmService,private router:Router) {
	router.events.subscribe(()=>{
		this._ser.SelectAll().subscribe((arg)=>{this.result=arg; console.log(this.result)});	
	});
  }
  ngOnChange(){
	  console.log("hi");
  }
	result:any;
	ngOnInit() {
		$(document).ready(function(){
			$(".noedit").attr("readonly",true);
		});
	  //this._ser.SelectAll().subscribe((arg)=>{this.result=arg; console.log(this.result)});   
	}
	deleteCustomer(formData){
	   this._ser.DelRecord(formData).subscribe((data)=>{console.log(data)});
	   console.log(formData);
	   //this.router.navigate(['/ShowTable']);
	   window.location.href="http://localhost:4200/ShowTable";
	} 
	edit(id,index){
		$("#"+index+" .noedit").removeAttr("readonly",false);
		console.log(index);
		this.editing=true;
		this.indexx=index
	}  
}


