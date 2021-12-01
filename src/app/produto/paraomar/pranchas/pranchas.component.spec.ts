import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PranchasComponent } from './pranchas.component';

describe('PranchasComponent', () => {
  let component: PranchasComponent;
  let fixture: ComponentFixture<PranchasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PranchasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PranchasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
