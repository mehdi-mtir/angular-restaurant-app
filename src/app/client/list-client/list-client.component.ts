import { Component, OnInit } from '@angular/core';
import { IClient } from '../model/iclient';
import { ClientService } from '../service/client.service';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {
  clients? : IClient[] = [];

  constructor(private clientService : ClientService){}


  ngOnInit(): void {
    this.clients = this.clientService.getClients();
  }

}
