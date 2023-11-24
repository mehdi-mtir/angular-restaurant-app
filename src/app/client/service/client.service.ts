import { Injectable } from '@angular/core';
import { IClient } from '../model/iclient';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private clients : IClient[] = [
    {
      id:1,
      nom: 'Mohamed Tounsi',
      email : 'mohamed.tounsi@gmail.com',
      password : 'moh123456789',
      tel:'98111222'
    },
    {
      id:2,
      nom: 'Maha Ben Azzouz',
      email : 'maha.benazzouz@gmail.com',
      password : 'mah987654',
      tel:'98333444'
    }
  ];

  clientsArrayEdited = new Subject<IClient[]>();

  constructor() { }

  getClients = () : IClient[]=>{
    return [...this.clients];
  }

  getClientById = (id : number)
            : IClient | undefined=>{
    return this.clients.find(client =>
                          client.id === id);
  }

  getLastId = ()=>{
    return this.clients[this.clients.length - 1].id;
  }

  //add
  addClient = (client : IClient) : void=>{
    this.clients = [...this.clients, client];
  }

  //edit
  editClient = (client : IClient) : void=>{
    this.clients = this.clients.map(
      cl=>cl.id===client.id?client:cl
    )
  }

  //delete
  deleteClient = (id : number) : void => {
    this.clients = this.clients.filter(
      cl=>cl.id !== id
    )
    this.clientsArrayEdited.next([...this.clients]);
    /*const indice = this.clients.findIndex(cl=>cl.id===id)
    this.clients.splice(indice, 1)*/
    //console.log(this.clients);
  }
}
