import { Routes } from '@angular/router';
import { Diary } from './diary/diary';
import { NewEntryFormReactive } from './new-entry-form-reactive/new-entry-form-reactive';
import { diaryResolver, entryResolver } from './diary.resolver';

export const routes: Routes = [
    {
        path: '',
        component: Diary,
        title: 'Diary',
        resolve: { diaryApi: diaryResolver },
    },
    {
        path: 'entry',
        component: NewEntryFormReactive,
        title: 'Entry Form',
    },
    {
        path: 'entry/:id',
        component: NewEntryFormReactive,
        title: 'Edit Entry',
        resolve: { entry: entryResolver },
    },
];
