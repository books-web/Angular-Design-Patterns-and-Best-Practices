import { Routes } from '@angular/router';
import { Diary } from './diary/diary/diary';
import { NewEntryFormTemplate } from './diary/new-entry-form-template/new-entry-form-template';
import { NewEntryFormReactive } from './diary/new-entry-form-reactive/new-entry-form-reactive';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    {
        path: 'home',
        component: Diary,
    },
    {
        path: 'new-template',
        component: NewEntryFormTemplate,
    },
    {
        path: 'new-reactive',
        component: NewEntryFormReactive,
    },
];
