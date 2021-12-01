import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuilhasComponent } from './quilhas.component';

describe('QuilhasComponent', () => {
  let component: QuilhasComponent;
  let fixture: ComponentFixture<QuilhasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuilhasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuilhasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
