import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletewpComponent } from './deletewp.component';

describe('DeletewpComponent', () => {
  let component: DeletewpComponent;
  let fixture: ComponentFixture<DeletewpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletewpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletewpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
