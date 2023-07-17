import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ContactoComponent } from './contacto/contacto.component';
import { ListaContactoComponent } from './lista-contacto/lista-contacto.component';
import { CallContactoComponent } from './call-contacto/call-contacto.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'lista', component: HomeComponent,
    children: [
      { path: '', component: ListaContactoComponent },
      { path: 'contacto', component: ContactoComponent },
      { path: 'call-contacto', component: CallContactoComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiRoutingModule {}
