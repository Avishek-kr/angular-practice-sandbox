import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <h2 *ngFor="let color of colors; even as e">{{ color }} - {{ e }}</h2>
  `,
  styleUrls: []
})
export class AppComponent {
  colors = ["green", "red", "yellow", "blue"];
}
