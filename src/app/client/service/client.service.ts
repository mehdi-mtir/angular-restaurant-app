import { Injectable } from '@angular/core';
import { IClient } from '../model/iclient';

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

  constructor() { }

  getClients = ()=>{
    return [...this.clients];
  }

  getClientById = (id : number)=>{
    return this.clients.find(client => client.id === id);
  }

  //add

  //edit

  //delete
}