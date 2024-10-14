import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CargarProductoPage } from './cargar-producto.page';

describe('CargarProductoPage', () => {
  let component: CargarProductoPage;
  let fixture: ComponentFixture<CargarProductoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CargarProductoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
