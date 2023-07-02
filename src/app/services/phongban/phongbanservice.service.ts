import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PhongbanserviceService {

  constructor(private _http: HttpClient) {
  }

  getAllPhongBan(): Observable<any> {
    return this._http.get('https://localhost:7187/api/PhongBan')
  }

}
