import { Component } from "@angular/core";

import { OnlineStatusService, OnlineStatusType } from "./modules/online-status";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  status: OnlineStatusType = OnlineStatusType.ONLINE;
  OnlineStatusType = OnlineStatusType;

  constructor(private onlineStatusService: OnlineStatusService) {
    this.onlineStatusService.status.subscribe((status: OnlineStatusType) => {
      this.status = status;
    });
  }
}
