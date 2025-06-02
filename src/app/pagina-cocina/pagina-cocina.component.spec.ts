import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaCocinaComponent } from './pagina-cocina.component';

describe('PaginaCocinaComponent', () => {
  let component: PaginaCocinaComponent;
  let fixture: ComponentFixture<PaginaCocinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaCocinaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaCocinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
