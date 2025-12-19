import { Routes } from '@angular/router';
import { Diary } from './diary/diary/diary';
import { NewEntryFormTemplate } from './diary/new-entry-form-template/new-entry-form-template';
import { NewEntryFormReactive } from './diary/new-entry-form-reactive/new-entry-form-reactive';
import { HomeComponent } from './home/home/home.component';
import { ErrorPage } from './error-page/error-page';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home', },
    {
        path: 'home',
        component: HomeComponent,
        title: 'Home',
    },
    {
        path: 'diary',
        component: Diary,
        title: 'Diary',
    },
    {
        path: 'diary/entry',
        component: NewEntryFormReactive,
        title: 'Entry Form',
    },
    {
        path: 'diary/entry/:id',
        component: NewEntryFormReactive,
        title: 'Edit Entry',
    },
    { path: 'error', component: ErrorPage },
    { path: '**', redirectTo: '/error' },
];
