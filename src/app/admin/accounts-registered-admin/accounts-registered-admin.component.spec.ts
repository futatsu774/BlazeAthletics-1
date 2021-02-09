import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsRegisteredAdminComponent } from './accounts-registered-admin.component';

describe('AccountsRegisteredAdminComponent', () => {
  let component: AccountsRegisteredAdminComponent;
  let fixture: ComponentFixture<AccountsRegisteredAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountsRegisteredAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsRegisteredAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
