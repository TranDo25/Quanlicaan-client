import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private _http: HttpClient) { }
  getListRoles():Observable<any>{
    return this._http.get('https://localhost:7187/api/Roles');
  }
}
