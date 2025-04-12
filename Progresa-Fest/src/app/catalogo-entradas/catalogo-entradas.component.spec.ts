import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoEntradasComponent } from './catalogo-entradas.component';

describe('CatalogoEntradasComponent', () => {
  let component: CatalogoEntradasComponent;
  let fixture: ComponentFixture<CatalogoEntradasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogoEntradasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogoEntradasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
