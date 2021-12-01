import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PonchoComponent } from './poncho.component';

describe('PonchoComponent', () => {
  let component: PonchoComponent;
  let fixture: ComponentFixture<PonchoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PonchoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PonchoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
