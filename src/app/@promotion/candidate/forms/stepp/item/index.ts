import { ButtonDocumentComponent } from './button-document/button-document';
import { ButtonScoreComponents } from './button-score';
import { ItemComponent } from './item.component';
import { SmartTableDataDatepickerComponent } from './smart-table-datepicker/smart-table-datepicker.component';

export const ItemComponents = [
  ItemComponent,
  ButtonDocumentComponent,
  ...ButtonScoreComponents,
  SmartTableDataDatepickerComponent
]