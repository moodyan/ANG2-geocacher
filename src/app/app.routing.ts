import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchFormComponent } from './search-form/search-form.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'search',
    component: SearchFormComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
