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