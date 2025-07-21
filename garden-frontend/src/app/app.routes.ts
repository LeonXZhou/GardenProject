import { Routes } from '@angular/router';
import { Home } from './home/home/home';
import { JournalMain } from './journal/journal-main/journal-main';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: Home
    },
    {
        path: 'journal',
        component: JournalMain
    }
];
