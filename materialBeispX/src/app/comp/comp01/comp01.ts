import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-comp01',
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
export class Comp01 {
  operand1 = signal<number>(0);
  operand2 = signal<number>(0);
  ergebnis = signal<number | string>('');

  plus() {
    this.ergebnis.set(this.operand1() + this.operand2());
  }
  minus() {
    this.ergebnis.set(this.operand1() - this.operand2());
  }
  mal() {
    this.ergebnis.set(this.operand1() * this.operand2());
  }
  durch() {
    if (this.operand2() === 0) {
      this.ergebnis.set('Division durch 0!');
    } else {
      this.ergebnis.set(this.operand1() / this.operand2());
    }
  }
}