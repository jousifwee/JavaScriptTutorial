npm install -g @angular/cli@latest

REM Ng new NgUeb01
REM ng g application js001
#npm install tailwindcss @tailwindcss/postcss postcss --force


## Material
ng new materialBeisp --style=scss --routing --zoneless=false --ssr=false

# Angular Material installieren
cd materialBeisp
ng add @angular/material

# Oder mit spezifischen Optionen
ng add @angular/material --theme=magenta-violet --typography=true --animations=enabled


ng g c comp/comp01 --inline-template --inline-style
ng g c comp/comp02 --inline-template --inline-style
ng g c comp/header --inline-template --inline-style


https://tailwindcss.com/docs/installation/framework-guides/angular



https://www.totaltypescript.com/vscode-extension


https://thispersonnotexist.org/


#Workshop

ng new materialBeispX --style=scss --routing --zoneless=false --ssr=false

# Angular Material installieren
cd materialBeispX

# mit spezifischen Optionen
ng add @angular/material --theme=magenta-violet --typography=true --animations=enabled

# 
ng g c comp/comp01 --inline-template --inline-style
ng g c comp/comp02 --inline-template --inline-style
ng g c comp/header --inline-template --inline-style

ng serve --open


1. Anpassungen

1.1 das Routing einrichten
###in materialBeispX/src/app/app.routes.ts

``` typescript
import { Comp01 } from './comp/comp01/comp01';
import { Comp02 } from './comp/comp02/comp02';

export const routes: Routes = [
  { path: '', redirectTo: '/comp01' , pathMatch: 'full' },
  { path: 'comp01', component: Comp01 },
  { path: 'comp02', component: Comp02 }
];
```

1.2 das menü immer oben anzeigen
in app.html
``` typescript
<app-header></app-header>
<router-outlet />
```

✘ [ERROR] NG8001: 'app-header' is not a known element:

in app.ts
``` typescript
// neu: 
import { Header } from "./comp/header/header";

//erweitert:
imports: [RouterOutlet, Header],
```

in header.ts das inline template anpassen
``` typescript
  template: `
    <p>
      header works!
    </p>
  `,
  // nach 
  template: `  <a routerLink="/comp01">Comp01</a> <span> | </span><a routerLink="/comp02">Comp02</a>
    <span> | </span><a routerLink="/">Home</a>
  `,
  ```

Links noch ohne Funktion -> import RouterLink (an 2 STellen)
``` typescript
import { RouterLink } from '@angular/router';
  imports: [RouterLink],
```

## MATERIAL Menü
 a) mat-menu (ein Flipout Menu - muss aktiviert werden im code)
 b) mat-nav-list (von oben nach unten)
 c) mat-toolbar (horizontal)

 ``` typescript
// navlist von oben nach unten

 import { MatListModule} from '@angular/material/list';
  imports: [..., MatListModule],
  template: ` 
<mat-nav-list>
  <button mat-list-item>Profile</button>
  <button mat-list-item>Account</button>
</mat-nav-list>

// mat-toolbar horizontal

<mat-toolbar color="primary">
  <button mat-button>Home</button>
  <button mat-button>Comp01</button>
  <button mat-button>Comp02</button>
</mat-toolbar>
 ```

## Aktiven Link hervorheben

``` typescript
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatListModule} from '@angular/material/list';
...
imports: [RouterLink,RouterLinkActive, MatListModule, MatToolbarModule],

...
  <button mat-button routerLink="/comp01" routerLinkActive="active-link">Comp01</button>
  <button mat-button routerLink="/comp02" routerLinkActive="active-link">Comp02</button>
</mat-toolbar>
  `,
  styles: `
      .active-link {
      background: #fff;
      color: #1976d2;
      font-weight: bold;
    }`
})
```

## Komponente Comp01

``` typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-comp01',
  imports: [],
  template: `
    <p>
      comp01 works!
    </p>
  `,
  styles: ``
})
export class Comp01 {

}
```
### wir wollen ein kleines typescript beispiel für eine arrow function



``` typescript ohne arrow
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
```


```typescript mit Arrow

import { Component, signal } from '@angular/core';
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
  operand1 = signal<number>(0);
  operand2 = signal<number>(0);
  ergebnis = signal<number | string>('');

  plus = () => this.ergebnis.set(this.operand1() + this.operand2());
  minus = () => this.ergebnis.set(this.operand1() - this.operand2());
  mal = () => this.ergebnis.set(this.operand1() * this.operand2());
  durch = () => {
    if (this.operand2() === 0) {
      this.ergebnis.set('Division durch 0!');
    } else {
      this.ergebnis.set(this.operand1() / this.operand2());
    }
  };
}
```