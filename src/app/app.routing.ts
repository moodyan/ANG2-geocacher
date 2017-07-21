import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { UserSavedListingsComponent } from './user-saved-listings/user-saved-listings.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'search',
    component: SearchFormComponent
  },
  {
    path: 'saved',
    component: UserSavedListingsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
