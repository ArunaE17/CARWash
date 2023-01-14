import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatewpComponent } from './updatewp.component';

describe('UpdatewpComponent', () => {
  let component: UpdatewpComponent;
  let fixture: ComponentFixture<UpdatewpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatewpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatewpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
