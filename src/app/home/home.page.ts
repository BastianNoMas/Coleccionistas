import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  menuItems: string[] = ['Inicio', 'Perfil', 'Configuración'];

  constructor() {}

}

