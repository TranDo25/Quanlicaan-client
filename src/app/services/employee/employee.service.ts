import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _http: HttpClient) {

  }

  addEmployee(data: any): Observable<any> {
    return this._http.post('https://localhost:7187/api/NhanVien', data);
  }

  getEmployeeList(): Observable<any> {
    return this._http.get('https://localhost:7187/api/NhanVien');
  }

  deleteEmployee(id: number): Observable<any> {
    return this._http.delete(`https://localhost:7187/api/NhanVien/${id}`);
  }

  updateEmployee(id: number, data: any) {
    return this._http.put(`https://localhost:7187/api/NhanVien/${id}`, data);
  }
}
