import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiquinisComponent } from './biquinis.component';

describe('BiquinisComponent', () => {
  let component: BiquinisComponent;
  let fixture: ComponentFixture<BiquinisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiquinisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BiquinisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
