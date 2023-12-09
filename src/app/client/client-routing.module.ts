import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListClientComponent } from './list-client/list-client.component';
import { AddClientComponent } from './add-client/add-client.component';
import { EditClientComponent } from './edit-client/edit-client.component';
import { authGuard } from '../shared/auth.guard';

const routes: Routes = [
  {path: '', component: ListClientComponent, canActivate : [authGuard]},
  {path : 'add', component: AddClientComponent, canActivate : [authGuard]},
  {path: 'edit/:id', component: EditClientComponent, canActivate : [authGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
