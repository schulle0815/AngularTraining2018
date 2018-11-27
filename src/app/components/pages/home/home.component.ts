import {Component, OnInit} from '@angular/core';
import {DeviceState} from 'src/app/types/devicestate.type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor() {}

  numDevices = 100;
  deviceState = DeviceState.Active;

  messages = ['Error 208', 'Normal op'];

  clear() {
    this.messages = [];
  }


  ngOnInit() {}
}
