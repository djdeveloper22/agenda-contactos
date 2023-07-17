import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeccionListContactosComponent } from './seccion-list-contactos/seccion-list-contactos.component';

@NgModule({
  declarations: [
    SeccionListContactosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SeccionListContactosComponent
  ]
})
export class ComponentsModule { }
