import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CargarProductoPageRoutingModule } from './cargar-producto-routing.module';

import { CargarProductoPage } from './cargar-producto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CargarProductoPageRoutingModule
  ],
  declarations: [CargarProductoPage]
})
export class CargarProductoPageModule {}
