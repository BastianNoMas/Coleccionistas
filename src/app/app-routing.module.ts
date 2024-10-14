import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cargar-producto',
    loadChildren: () => import('./cargar-producto/cargar-producto.module').then( m => m.CargarProductoPageModule)
  },
  {
    path: 'ver-productos',
    loadChildren: () => import('./ver-productos/ver-productos.module').then( m => m.VerProductosPageModule)
  },
  {
    path: 'editar-producto',
    loadChildren: () => import('./editar-producto/editar-producto.module').then( m => m.EditarProductoPageModule)
  },
  {
    path: 'eliminar-producto',
    loadChildren: () => import('./eliminar-producto/eliminar-producto.module').then( m => m.EliminarProductoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
