import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonqummiComponent } from './botonqummi.component';

describe('BotonqummiComponent', () => {
  let component: BotonqummiComponent;
  let fixture: ComponentFixture<BotonqummiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotonqummiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonqummiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
