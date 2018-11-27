import { Component, OnInit } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { LogoutComponent } from "./logout/logout.component";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.scss"]
})
export class AdminComponent implements OnInit {
  loginInfo: any;
  constructor() {}

  ngOnInit() {
    this.loginInfo = LoginComponent;
  }

  toggleLogin() {
    if (this.loginInfo === LoginComponent) {
      this.loginInfo = LogoutComponent;
    } else {
      this.loginInfo = LoginComponent;
    }
  }
}
