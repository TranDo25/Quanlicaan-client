import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {EmployeeService} from "../services/employee/employee.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CoreService} from "../core/core.service";
import {PhongbanserviceService} from "../services/phongban/phongbanservice.service";
import {RoleService} from "../services/Roles/role.service";

@Component({
  selector: 'app-nhanvien-add-edit',
  templateUrl: './nhanvien-add-edit.component.html',
  styleUrls: ['./nhanvien-add-edit.component.scss']
})
export class NhanvienAddEditComponent implements OnInit {
  nvForm: FormGroup;
  toggleNV = false;
  listPhongBan: any[] = [];
  listRoles: any[] = [];
  phongban: string[] = [
    'IT',
    'Hành chính',
    'Kế toán',
    'Nhân sự'
  ]

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService:CoreService,
    private _fb: FormBuilder,
    private _empService: EmployeeService,
    private _phongBanService: PhongbanserviceService,
    private _roleService: RoleService,
    private _dialogRef: MatDialogRef<NhanvienAddEditComponent>) {
    this.nvForm = this._fb.group({
      username: '',
      upassword: '',
      quyen: '',
      hoTen: '',
      gioiTinh: '',
      phone: '',
      email: '',
      diaChi:'',
      IDrole:'',
      ngaySinh:'',
      IDPhongBan:''
    })
  }

  ngOnInit() {
    this.nvForm.patchValue(this.data);
    this.getPhongBanList();
    this.getListRoles();
  }
  getListRoles(){
    this._roleService.getListRoles().subscribe({
      next: (data: any[]) => {
        this.listRoles = data;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
  getPhongBanList() {
    this._phongBanService.getAllPhongBan().subscribe({
      next: (data: any[]) => {
        this.listPhongBan = data;
      },
      error: (err) => {
        console.log(err);
      }
    });

  }
  onFormSubmit() {
    if (this.nvForm.valid) {
      if(this.data){
        this._empService.updateEmployee(this.data.id, this.nvForm.value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('Update nhân viên thành công', 'done');
            this._dialogRef.close(true);
          },
          error: (err) => {
            console.error(err)
          }
        })
      }
      else{
        this._empService.addEmployee(this.nvForm.value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('Thêm mới nhân viên thành công', 'done');

            this._dialogRef.close(true);
          },
          error: (err) => {
            console.error(err)
          }
        })
      }

    }
  }
}
