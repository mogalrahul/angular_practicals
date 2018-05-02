import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ShowtableService {

  constructor(private _http:Http) { }
	SelectAll(value)
	{
		return this._http.post("http://localhost/demo/selectAll.php",value).map((res:Response)=>{ return res.json() }); 
	}
}
