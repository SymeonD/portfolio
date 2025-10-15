import { Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { NotionAutoComponent } from './notion-auto/notion-auto.component';

// Route Configuration
const routes: Routes = [
    // Home
    { path: '', component: HomePageComponent },
    // Hero
    { path: 'notion-auto', component: NotionAutoComponent },
    // 404
    { path: '**', redirectTo: '' }
];

export default routes;
