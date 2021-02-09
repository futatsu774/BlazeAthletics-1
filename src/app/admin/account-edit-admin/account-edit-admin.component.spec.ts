import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountEditAdminComponent } from './account-edit-admin.component';

describe('AccountEditAdminComponent', () => {
  let component: AccountEditAdminComponent;
  let fixture: ComponentFixture<AccountEditAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountEditAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountEditAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
