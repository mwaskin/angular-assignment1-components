import { Component } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './successAlert.component.html',
  styles: [
    `
      h1 {
        background-color: rgba(0, 255, 0, 0.3);
        color: green;
      }
    `,
  ],
})
export class SuccessAlertComponent {}
