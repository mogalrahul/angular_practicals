import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	menus=["Home","About","Login","Register","ShowTable"];
  constructor() { }

  ngOnInit() {
	//  $(function(){
	//	  alert("HI..Jquery Works");
	//  });
  }

}
