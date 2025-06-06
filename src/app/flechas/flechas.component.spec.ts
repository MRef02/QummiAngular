import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlechasComponent } from './flechas.component';

describe('FlechasComponent', () => {
  let component: FlechasComponent;
  let fixture: ComponentFixture<FlechasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlechasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlechasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
