import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaiosComponent } from './maios.component';

describe('MaiosComponent', () => {
  let component: MaiosComponent;
  let fixture: ComponentFixture<MaiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaiosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
