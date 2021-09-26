import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `<h1 *ngIf="displayName">Avishek</h1>`,
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  displayName = true;
}
