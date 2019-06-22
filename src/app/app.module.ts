import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { OnlineStatusModule } from "./modules/online-status";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, OnlineStatusModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
