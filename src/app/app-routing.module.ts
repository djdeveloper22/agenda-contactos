import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UiRoutingModule } from './ui/ui.routing';

const routes: Routes = [
  { path: '', redirectTo: 'lista', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    UiRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
