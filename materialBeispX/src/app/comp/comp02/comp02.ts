import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-comp02',
  standalone: true,
  imports: [FormsModule],
  template: `
    <h3>Rechner mit Signals</h3>
    <input type="number" [(ngModel)]="operand1" placeholder="Operand 1"
       />
    <input type="number" [(ngModel)]="operand2" placeholder="Operand 2"
       />
    <input type="text" [(ngModel)]="ergebnis" placeholder="Ergebnis" readonly />

    <div style="margin-top:10px;">
      <button (click)="plus()">+</button>
      <button (click)="minus()">-</button>
      <button (click)="mal()">*</button>
      <button (click)="durch()">/</button>
    </div>
  `,
  styles: `input { margin: 0 5px 10px 0; width: 100px; }`
})
export class Comp02 {
  operand1: number = 0;
  operand2: number = 0;
  ergebnis: number | string = '';

  plus = () => this.ergebnis = this.operand1 + this.operand2;
  minus = () => this.ergebnis = this.operand1 - this.operand2;
  mal = () => this.ergebnis = this.operand1 * this.operand2;
  durch = () => {
    if (this.operand2 === 0) {
      this.ergebnis = 'Division durch 0!';
    } else {
      this.ergebnis = this.operand1 / this.operand2;
    }
  };
}