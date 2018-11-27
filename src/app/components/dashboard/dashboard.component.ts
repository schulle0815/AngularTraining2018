import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Observable } from "rxjs";
import { toArray } from "rxjs/operators";
import { MachineModel } from "src/app/models/machine.model";
import { EmitterService } from "src/app/services/emitter.service";
import { MachinedataService } from "src/app/services/machinedata.service";

import { DeviceState } from "../../types/devicestate.type";
import { GridModel } from "../shared/grid/models/grid.model";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  @Input() devices: number;

  @Input() state: DeviceState;

  @Input() messages: Array<string>;

  machineData: GridModel<MachineModel>;
  // async type = Suffix $
  machineData$: Observable<MachineModel>;

  @Output() clearMessages: EventEmitter<void>;

  constructor(
    private machinedataService: MachinedataService,
    private emitter: EmitterService
  ) {
    this.clearMessages = new EventEmitter<void>();
  }

  ngOnInit() {
    // getData() returns Observable<MachineModel>!
    const data = this.machinedataService.getData();

    this.machineData$ = data;

    data.pipe(toArray()).subscribe(d => {
      this.machineData = new GridModel(d, MachineModel);
      this.emitter.get("MACHINEDATA").emit(d);
    });
  }

  confirmMessages() {
    this.clearMessages.emit();
  }
}
