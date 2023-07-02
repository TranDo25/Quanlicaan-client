import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http: HttpClient) {
  }

  requestLogin(data: any): Observable<any> {
    return this._http.post('https://localhost:7187/api/Auth', data);
  }
}
