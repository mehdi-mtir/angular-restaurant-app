import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ListClientComponent } from './list-client/list-client.component';
import { AddClientComponent } from './add-client/add-client.component';
import { EditClientComponent } from './edit-client/edit-client.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListClientComponent,
    AddClientComponent,
    EditClientComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    FormsModule, //Template-driven forms
    ReactiveFormsModule //Reactive forms
  ]
})
export class ClientModule { }
