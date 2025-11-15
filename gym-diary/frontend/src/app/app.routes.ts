import { Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { Diary } from './diary/diary/diary';

export const routes: Routes = [
    {
        path: '',
        component: Diary,
    },
];
