import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductNewAdminComponent } from './product-new-admin.component';

describe('ProductNewAdminComponent', () => {
  let component: ProductNewAdminComponent;
  let fixture: ComponentFixture<ProductNewAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductNewAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductNewAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
