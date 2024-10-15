import { Injectable } from '@angular/core';
import { Producto } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private productos: Producto[] = [];

  constructor() { }

  // Obtener todos los productos
  obtenerProductos(): Producto[] {
    return [...this.productos];
  }

  // Crear un nuevo producto
  agregarProducto(producto: Producto) {
    this.productos.push({ ...producto, id: this.productos.length + 1 });
  }

  // Editar un producto
  editarProducto(id: number, nuevoProducto: Producto) {
    const index = this.productos.findIndex(prod => prod.id === id);
    if (index !== -1) {
      this.productos[index] = { ...nuevoProducto, id };
    }
  }

  // Eliminar un producto
  eliminarProducto(id: number) {
    this.productos = this.productos.filter(prod => prod.id !== id);
  }

  // Obtener un solo producto por ID
  obtenerProductoPorId(id: number): Producto | undefined {
    return this.productos.find(prod => prod.id === id);
  }
}
