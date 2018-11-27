import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { flatMap } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class MachinedataService {
  constructor(private http: HttpClient) {}

  public getData(): Observable<MachineModel> {
    // jsonp uses enabled Cross Origin policy under the hood, so we don't have
    // to specify it server-side
    // this.http.jsonp
    return this.http
      .get<Array<MachineModel>>("http://localhost:4200/assets/data.json")
      .pipe(flatMap(d => d));
  }
}

import { MachineModel } from "../models/machine.model";
