import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqsUserComponent } from './faqs-user.component';

describe('FaqsUserComponent', () => {
  let component: FaqsUserComponent;
  let fixture: ComponentFixture<FaqsUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaqsUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
