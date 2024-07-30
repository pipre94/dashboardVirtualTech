import { Routes } from '@angular/router';
import { CreateInvoiceComponent } from './invoice/create-invoice/create-invoice.component';

export const routes: Routes = [
    { path: '', redirectTo: '/create-invoice', pathMatch: 'full' },
    { path: 'create-invoice', component: CreateInvoiceComponent },
    // { path: 'create-people', component: CreatePeopleComponent },
    // { path: 'update-people/:id', component: CreatePeopleComponent },
    { path: '**', redirectTo: '' }
  ];