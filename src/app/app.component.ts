import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `<h1 *ngIf="displayName; else elseBlock">Avishek</h1>
    <ng-template #elseBlock>
      <h3>Name is hidden</h3>
    </ng-template> `,
  styleUrls: []
})
export class AppComponent {
  displayName = false;
}
