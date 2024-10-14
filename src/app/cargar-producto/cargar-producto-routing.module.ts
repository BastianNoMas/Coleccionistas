import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CargarProductoPage } from './cargar-producto.page';

const routes: Routes = [
  {
    path: '',
    component: CargarProductoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CargarProductoPageRoutingModule {}
