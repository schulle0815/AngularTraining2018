import {Component, OnDestroy, OnInit} from '@angular/core';
import {EventEmitter} from '@angular/core';
import {EmitterService} from 'src/app/services/emitter.service';

@Component({
  selector: 'app-devicenum',
  templateUrl: './devicenum.component.html',
  styleUrls: ['./devicenum.component.scss']
})
export class DevicenumComponent implements OnInit, OnDestroy {
  count: number;

  private emitterSubscription: EventEmitter<any>;

  constructor(private emitter: EmitterService) {
    // emitter is of type <any>, hence the cast to get array intellisense
    this.emitterSubscription =
        this.emitter.get('MACHINEDATA')
            .subscribe(data => (this.count = (<[]>data).length));
  }

  ngOnInit() {}

  ngOnDestroy(): void {
    this.emitterSubscription.unsubscribe();
  }
}
