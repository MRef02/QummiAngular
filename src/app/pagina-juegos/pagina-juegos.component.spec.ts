import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaJuegosComponent } from './pagina-juegos.component';

describe('PaginaJuegosComponent', () => {
  let component: PaginaJuegosComponent;
  let fixture: ComponentFixture<PaginaJuegosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaJuegosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaJuegosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
