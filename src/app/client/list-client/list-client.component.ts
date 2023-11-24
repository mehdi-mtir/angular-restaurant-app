import { Component, OnDestroy, OnInit } from '@angular/core';
import { IClient } from '../model/iclient';
import { ClientService } from '../service/client.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit, OnDestroy {
  clients? : IClient[];
  subscription? : Subscription;

  constructor(private clientService : ClientService){}


  deleteClient = (id : number) =>{
    if(window.confirm('Etes-vous sure de vouloir supprimer le client?'))
      this.clientService.deleteClient(id);
  }


  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.clients = this.clientService.getClients();
    this.subscription = this.clientService.clientsArrayEdited.subscribe(
      clients => this.clients = clients
    )
  }

}
