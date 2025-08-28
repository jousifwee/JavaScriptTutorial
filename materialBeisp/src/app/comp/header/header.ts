import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatNavList } from '@angular/material/list';

@Component({
  selector: 'app-header',
  imports: [RouterLink, MatNavList],
  template: `
  <mat-nav-list>
    <a mat-list-item routerLink="/comp01" routerLinkActive="active">Comp01</a>
    <a mat-list-item routerLink="/comp02" routerLinkActive="active">Comp02</a>
    <a mat-list-item routerLink="/" routerLinkActive="active">Home</a>
  </mat-nav-list>
  <hr>
    <a routerLink="/comp01">Comp01</a> <span> | </span><a routerLink="/comp02">Comp02</a>
    <span> | </span><a routerLink="/">Home</a>
<hr>
    <p>
      header works!
    </p>
  `,
  styles: ``
})
export class Header {

}
