import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatListModule} from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  imports: [RouterLink,RouterLinkActive, MatListModule, MatToolbarModule],
  template: `  <a routerLink="/comp01">Comp01</a> <span> | </span><a routerLink="/comp02">Comp02</a>
    <span> | </span><a routerLink="/">Home</a>
<br>
END OF CLASSIC HEADER - NOW WITH MATERIAL DESIGN
<hr>
<mat-toolbar>
  <button mat-button routerLink="/" >Home</button>
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
export class Header {

}
