import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <div [ngSwitch]="color">
      <div *ngSwitchCase="'red'">Color is {{ color }}</div>
      <div *ngSwitchCase="'blue'">Color is {{ color }}</div>
      <div *ngSwitchCase="'green'">Color is {{ color }}</div>
      <div *ngSwitchDefault>pick a color</div>
    </div>
  `,
  styleUrls: []
})
export class AppComponent {
  color = "green";
}
