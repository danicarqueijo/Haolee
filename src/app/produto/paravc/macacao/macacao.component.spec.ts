import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacacaoComponent } from './macacao.component';

describe('MacacaoComponent', () => {
  let component: MacacaoComponent;
  let fixture: ComponentFixture<MacacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MacacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MacacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
