import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParafinasComponent } from './parafinas.component';

describe('ParafinasComponent', () => {
  let component: ParafinasComponent;
  let fixture: ComponentFixture<ParafinasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParafinasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParafinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
