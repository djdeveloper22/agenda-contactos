import { Component, Input } from '@angular/core';
import { ContactoService } from 'src/app/core/applications/services/contacto.service';
import { ContactoDto } from 'src/app/domain/entities/contacto.dto';


@Component({
  selector: 'app-seccion-list-contactos',
  templateUrl: './seccion-list-contactos.component.html',
  styleUrls: ['./seccion-list-contactos.component.scss']
})
export class SeccionListContactosComponent {

  @Input() listContact: ContactoDto[];

  constructor(private emitAction : ContactoService) { }

  deleteContact(index: number){
    let result = confirm("desea eliminar el contacto?");
    if(result){
      this.emitAction.delete(index).subscribe((response)=>{
        if(response.status === 200){
           this.listContact.splice(index, 1);
        }
      })
    }
  }

  updateContact(contacto: any, pos: number){
    console.log(contacto.nombre + ' contacto')
    let dataActualizado: ContactoDto = {
      nombre: 'Albertito Jose',
      apellido: 'De la Ossa',
      id: pos
    }

    this.emitAction.update(dataActualizado).subscribe((response)=>{
      console.log(response);
    })
  }

}
