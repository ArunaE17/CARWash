import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CusregistrationComponent } from './cusregistration.component';

describe('CusregistrationComponent', () => {
  let component: CusregistrationComponent;
  let fixture: ComponentFixture<CusregistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CusregistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CusregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
