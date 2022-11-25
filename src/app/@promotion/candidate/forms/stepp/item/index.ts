import { ButtonFileComponent } from './button-file/button-file';
import { ButtonScoreComponents } from './button-score';
import { ItemComponent } from './item.component';
import { SmartTableDataDatepickerComponent } from './smart-table-datepicker/smart-table-datepicker.component';

export const ItemComponents = [
  ItemComponent,
  ButtonFileComponent,
  ...ButtonScoreComponents,
  SmartTableDataDatepickerComponent
]