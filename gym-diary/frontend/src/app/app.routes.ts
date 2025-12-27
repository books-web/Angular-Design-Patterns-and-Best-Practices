import { Routes } from '@angular/router';
import { Diary } from './diary/diary/diary';
import { NewEntryFormTemplate } from './diary/new-entry-form-template/new-entry-form-template';
import { NewEntryFormReactive } from './diary/new-entry-form-reactive/new-entry-form-reactive';
import { HomeComponent } from './home/home/home.component';
import { ErrorPage } from './error-page/error-page';
import { Login } from './login/login/login';
import { authGuard } from './login/services/auth.guard';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home', },
    {
        path: 'diary',
        canActivate: [authGuard],
        loadChildren: () => {
            return import('./diary/diary.routes').then((m) => m.routes);
        }
    },
    {
        path: 'home',
        component: HomeComponent,
        title: 'Home',
    },

    {
        path: 'login',
        component: Login,
    },
    { path: 'error', component: ErrorPage },
    { path: '**', redirectTo: '/error' },
];
