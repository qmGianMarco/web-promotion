import { AlertPromComponent } from './alert-prom/alert-prom.component';
import { DialogComponents } from './dialog';
import { ListCandidatesComponents } from './list-candidates';
import { NotificationComponent } from './notification/notification.component';

export const SharedComponents = [
  ...ListCandidatesComponents,
  ...DialogComponents,
  AlertPromComponent,
  NotificationComponent
]