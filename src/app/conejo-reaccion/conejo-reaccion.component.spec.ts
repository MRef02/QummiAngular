import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConejoReaccionComponent } from './conejo-reaccion.component';

describe('ConejoReaccionComponent', () => {
  let component: ConejoReaccionComponent;
  let fixture: ComponentFixture<ConejoReaccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConejoReaccionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConejoReaccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
