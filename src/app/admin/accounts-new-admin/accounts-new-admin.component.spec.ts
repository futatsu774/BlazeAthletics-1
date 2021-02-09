import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsNewAdminComponent } from './accounts-new-admin.component';

describe('AccountsNewAdminComponent', () => {
  let component: AccountsNewAdminComponent;
  let fixture: ComponentFixture<AccountsNewAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountsNewAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsNewAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
