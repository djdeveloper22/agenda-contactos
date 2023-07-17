import { HttpResponse } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { ContactoService } from 'src/app/core/applications/services/contacto.service';
import { ContactoDto } from 'src/app/domain/entities/contacto.dto';

@Component({
  selector: 'app-lista-contacto',
  templateUrl: './lista-contacto.component.html',
  styleUrls: ['./lista-contacto.component.scss']
})
export class ListaContactoComponent implements OnInit {

  public tasks: Array<ContactoDto> = [];

  constructor(private serviceContacto: ContactoService) {}

  ngOnInit(): void {
    this.mostrarContactos();
  }

  mostrarContactos(): void{
    this.serviceContacto.read().subscribe((response: HttpResponse<Array<ContactoDto>>)=>{
      response.status === 200 ? this.tasks = response.body : null
      console.log(response.body)
    })
  }


}
