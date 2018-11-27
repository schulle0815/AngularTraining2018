import { Component, OnInit } from "@angular/core";
import { MachineModel } from "src/app/models/machine.model";

@Component({
  selector: "app-editmachine",
  templateUrl: "./editmachine.component.html",
  styleUrls: ["./editmachine.component.scss"]
})
export class EditmachineComponent implements OnInit {
  model: MachineModel = new MachineModel();
  constructor() {}

  ngOnInit() {}

  onSubmit(model: any) {}
}
