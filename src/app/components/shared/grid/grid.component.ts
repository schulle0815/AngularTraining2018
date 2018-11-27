import {Component, Input, OnInit} from '@angular/core';

import {GridModel} from './models/grid.model';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('data') model: GridModel<any>;

  constructor() {}

  ngOnInit() {}
}
