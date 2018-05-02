import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SevenmService {

  constructor(private _http:Http) { }
	Register(value){
		return this._http.post("http://localhost/demo/register.php",value).map((res:Response)=>{ return res.json() });  
	}
	
	SelectAll()
	{
		return this._http.post("http://localhost/demo/selectAll.php",0).map((res:Response)=>{ return res.json() }); 
	}
	view(id)
	{
		return this._http.post("http://localhost/demo/select.php",id).map((res:Response)=>{ return res.json() }); 
	}
	
	DelRecord(value){
		return this._http.post("http://localhost/demo/delete.php",value).map((res:Response)=>{ return res.json() });  
	}
	
	editCust(value,id){
		return this._http.post("http://localhost/demo/edit.php?id="+id,value).map((res:Response)=>{ return res.json() });  
	}
	
	
}
