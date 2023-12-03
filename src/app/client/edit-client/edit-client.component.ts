import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../service/client.service';
import { IClient } from '../model/iclient';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {
  client? : IClient;
  editClientForm! : FormGroup;

  constructor(private activatedRoute : ActivatedRoute,
    private service : ClientService,
    private router : Router){}

  editClient(){
    const values = this.editClientForm.value;
    this.service.editClient(
      {
        id :this.client!.id,
        nom : values.nom,
        email : values.email,
        password : values.password,
        tel : values.tel
      } as IClient
    );
    this.router.navigate(['/clients']);
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      parametres => {
        this.client =
          this.service.getClientById(+parametres['id']);
        if(this.client === undefined)
          this.router.navigate(['/clients']);
        //console.log(this.client);

        this.editClientForm = new FormGroup({
          nom : new FormControl(this.client!.nom, Validators.required),
          email : new FormControl(this.client!.email, [Validators.email, Validators.required]),
          password : new FormControl(this.client!.password, Validators.required),
          tel : new FormControl(this.client!.tel)
        })

      }
    )
  }



}
