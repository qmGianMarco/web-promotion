import { Component, OnInit } from "@angular/core";
import { PermissionService } from "../../services/permission.service";

@Component({
  selector: "notification",
  templateUrl: "./notification.component.html",
})
export class NotificationComponent {
  message =
    "Recuerde que la fecha límite para subir todos sus datos es el 09 de Setiembre (15:00 hrs)";
  canDisplayNotification = true;
  constructor(private permissionService: PermissionService) {
    // this.canDisplayNotification = this.permissionService.getCanFillData();
  }
}
