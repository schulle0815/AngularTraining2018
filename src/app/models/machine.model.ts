import {Display} from './decorator/display.decorator';
import {Hidden} from './decorator/hidden.decorator.1';
import {IsFilterable} from './decorator/isfilterable.decorator.1';
import {IsSortable} from './decorator/issortable.decorator.2';

export class MachineModel {
  @Hidden() id: number = 0;
  @Display('Machine Name') @IsSortable() @IsFilterable() name: string = '';
  @Display('Location Name') @IsSortable() location: string = '';
  @Hidden() hasDevices: boolean = false;
}
