import { Component } from '@angular/core';
import { ProductoService } from '../services/producto.service';
import { Producto } from '../models/producto.model';

@Component({
  selector: 'app-cargar-producto',
  templateUrl: './cargar-producto.page.html',
  styleUrls: ['./cargar-producto.page.scss'],
})
export class CargarProductoPage {
  nuevoProducto: Producto = {
    id: 0,
    nombre: '',
    descripcion: '',
    precio: 0,
    imagen: ''
  };

  constructor(private productoService: ProductoService) {}

  agregarProducto() {
    this.productoService.agregarProducto(this.nuevoProducto);
  }
}
