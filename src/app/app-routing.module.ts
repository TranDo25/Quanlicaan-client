import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from "./app.component";
import {LoginComponent} from "./login/login.component";
import {NhanvienComponent} from "./nhanvien/nhanvien.component";
import {LayoutComponent} from "./layouts/layout/layout.component";

const routes: Routes = [
  {
    path:'',
    component:AppComponent,
    children:[
      {
        path:'',
        component:LoginComponent
      },

    ]
  },
  {
    path:'main',
    component:LayoutComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
