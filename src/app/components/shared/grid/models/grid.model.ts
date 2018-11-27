import {Type} from '@angular/core';

import {GridHeaderModel} from './gridheader.model';

export class GridModel<T> {
  constructor(items: Array<T>, type: Type<T>) {
    this.rawItems = this.items = items;
    this.headers = [];
    // to "reflect" the properties of the type, we need an instance
    const typeInstance = new type();
    for (const prop in typeInstance) {
      // we want to ignore derived properties (e.g. from object) as well as
      // hidden items
      if (typeInstance.hasOwnProperty(prop) &&
          !typeInstance[`__hidden__${prop}__`]) {
        const h = new GridHeaderModel();
        h.isSortable = typeInstance[`__issortable__${prop}__`];
        h.propName = prop;
        h.text = typeInstance[`__display__${prop}__`];
        this.headers.push(h);
      }
    }
  }

  public headers: Array<GridHeaderModel>;
  public items: Array<T>;
  private rawItems: Array<T>;

  public filter(value: string, propName: string): void {}

  public sort(propName: string, dir: string): void {}
}
