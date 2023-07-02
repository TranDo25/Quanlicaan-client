import { Component } from '@angular/core';
import {SideNavService} from "../../services/sidenav/side-nav.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title: string = "Quản lý ăn ca";
  constructor(private sideNavService: SideNavService) {

  }
  clickMenu() {
    this.sideNavService.toggle();
  }
}
