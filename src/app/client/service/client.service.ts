import { Injectable } from '@angular/core';
import { IClient } from '../model/iclient';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IClientDTO } from '../model/i-client-dto';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private clients : IClient[] = [];
  private url = "http://localhost:3000/clients";
  options = {headers : new HttpHeaders(
    {'content-type' : "application/json"}
  )}

  clientsArrayEdited = new Subject<IClient[]>();

  constructor(private http : HttpClient) { }

  getClients = () : IClient[]=>{

    this.http.get<IClient[]>(this.url).subscribe(
      {
        next :
          (clients)=> {
            this.clients = clients;
            //Informer les composants concernés que le tableau a été modifié
            this.clientsArrayEdited.next([...this.clients])
          }
          ,
        error : (err)=>console.log(err),
        complete : ()=>console.log("Request completed!")
      }
    )

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
  addClient = (client : IClientDTO) : void=>{

    this.http.post<IClient>(this.url, client, this.options).subscribe(
      {
        next : client => {
          this.clients = [...this.clients, client];
          this.clientsArrayEdited.next([...this.clients])
        },
        error : (err)=>console.log(err),
        complete : ()=>console.log("Request completed!")
      }
    )

  }

  //edit
  editClient = (client : IClient) : void=>{
    this.http.put<IClient>(`${this.url}/${client.id}`,
      {
        nom : client.nom,
        email : client.email,
        password : client.password,
        tel : client.tel
      },
      this.options ).subscribe(
        client => {
          this.clients = this.clients.map(
                cl=>cl.id===client.id?client:cl
              )
          this.clientsArrayEdited.next([...this.clients])
        }
      )


  }

  //delete
  deleteClient = (id : number) : void => {
    this.http.delete(`${this.url}/${id}`).subscribe(
      ()=>{
        this.clients = this.clients.filter(
          cl=>cl.id !== id
        )
        this.clientsArrayEdited.next([...this.clients]);
      }
    )

    /*const indice = this.clients.findIndex(cl=>cl.id===id)
    this.clients.splice(indice, 1)*/
    //console.log(this.clients);
  }
}
