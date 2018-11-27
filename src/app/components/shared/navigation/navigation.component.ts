import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NavigationModel } from "./models/navigation.model";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"]
})
export class NavigationComponent implements OnInit {
  private routerConfig: Array<NavigationModel>;
  constructor(private router: Router) {}

  ngOnInit() {
    this.routerConfig = [];
    this.router.config
      .filter(r => !r.redirectTo)
      .filter(r => r.data && r.data["menu"])
      .map(r => {
        const navItem: NavigationModel = {
          text: r.data["text"],
          path: r.path,
          icon: r.data["icon"]
        }; // no . notation because we want to make clear that these props
        // are optional (dynamicaly added), data is <any>!!!
        this.routerConfig.push(navItem);
      });
  }
}
