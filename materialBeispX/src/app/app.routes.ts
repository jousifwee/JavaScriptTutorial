import { Routes } from '@angular/router';
import { Comp01 } from './comp/comp01/comp01';
import { Comp02 } from './comp/comp02/comp02';

export const routes: Routes = [
  { path: '', redirectTo: '/comp01' , pathMatch: 'full' },
  { path: 'comp01', component: Comp01 },
  { path: 'comp02', component: Comp02 }
];
