import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CallContactoComponent } from '../call-contacto/call-contacto.component';
import { ContactoComponent } from '../contacto/contacto.component';
import { ListaContactoComponent } from '../lista-contacto/lista-contacto.component';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { SeccionListContactosComponent } from 'src/app/components/seccion-list-contactos/seccion-list-contactos.component';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [
    CallContactoComponent,
    ContactoComponent,
    ListaContactoComponent,
    HomeComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule,
    SharedModule,
    CoreModule
  ],
  exports: [
    CallContactoComponent,
    ContactoComponent,
    ListaContactoComponent,
    HomeComponent,
    SeccionListContactosComponent
  ]
})
export class HomeModule { }
