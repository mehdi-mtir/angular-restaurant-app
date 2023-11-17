import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClientService } from '../service/client.service';
import { IClient } from '../model/iclient';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent {

  constructor(private clientService : ClientService,
    private router : Router){}

  addClient = (f : NgForm) =>{
    //console.log(f);
    const newClient = {
      id : this.clientService.getLastId() + 1,
      nom : f.value.nom,
      email : f.value.email,
      password : f.value.password,
      tel : f.value.tel
    } as IClient;
    this.clientService.addClient(newClient);
    this.router.navigate(['/client']);
  }

}
