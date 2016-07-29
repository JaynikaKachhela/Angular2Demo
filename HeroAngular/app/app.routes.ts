import { provideRouter, RouterConfig }  from '@angular/router';
import { HeroComponent } from './hero.component';
import {DashboardComponent}from './dashboard.component'

const routes: RouterConfig = [
    {
        path: 'heros',
        component: HeroComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
];

export const appRouterProviders = [
    provideRouter(routes)
];