import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  data:any;
  constructor(private route:ActivatedRoute){}
	ngOnInit(){
		this.data=this.route.snapshot.data;
		console.log(this.data.g);
	}
  }
