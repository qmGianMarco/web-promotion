import { ButtonFileComponent } from '../../../../file/button-file/button-file.component';
import { ButtonScoreComponents } from './button-score';
import { TableComponent } from './table.component';
import { SmartTableDataDatepickerComponent } from './smart-table-datepicker/smart-table-datepicker.component';

export const TableComponents = [
  TableComponent,
  ButtonFileComponent,
  ...ButtonScoreComponents,
  SmartTableDataDatepickerComponent
]