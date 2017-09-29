import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './Dashboard/dashboard.component';
import { HeroesComponent } from './Heroes/heroes.component';
import { HeroDetailComponent } from './Hero-Detail/hero-detail.component';
import { VillainsComponent } from './Villains/villains.component';

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'detail/:id', component: HeroDetailComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'villains', component: VillainsComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule { }