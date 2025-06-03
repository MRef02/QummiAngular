import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginaMascotasComponent } from './pagina-mascotas.component';

describe('PaginaJuegosComponent', () => {
  let component: PaginaMascotasComponent;
  let fixture: ComponentFixture<PaginaMascotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaMascotasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaMascotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});