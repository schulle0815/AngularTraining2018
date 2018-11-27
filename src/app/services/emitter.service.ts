import { EventEmitter, Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class EmitterService {
  private emitters: { [id: string]: EventEmitter<any> } = {};

  get(id: string): EventEmitter<any> {
    if (!this.emitters[id]) {
      this.emitters[id] = new EventEmitter<any>();
    }
    return this.emitters[id];
  }
}
