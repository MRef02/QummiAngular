import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginaSoporteComponent } from './pagina-soporte.component';

describe('PaginaJuegosComponent', () => {
  let component: PaginaSoporteComponent;
  let fixture: ComponentFixture<PaginaSoporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaSoporteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaSoporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});