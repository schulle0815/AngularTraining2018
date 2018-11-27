import {
  AfterViewInit,
  Component,
  ContentChildren,
  OnInit,
  QueryList
} from "@angular/core";

import { TabComponent } from "../tab/tab.component";

@Component({
  selector: "app-tabs",
  templateUrl: "./tabs.component.html",
  styleUrls: ["./tabs.component.scss"]
})
export class TabsComponent implements OnInit, AfterViewInit {
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
  constructor() {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.tabs.forEach(t => (t.title = `Go to ${t.title}`));
  }
}
