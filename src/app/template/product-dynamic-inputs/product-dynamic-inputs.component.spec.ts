import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDynamicInputsComponent } from './product-dynamic-inputs.component';

describe('ProductDynamicInputsComponent', () => {
  let component: ProductDynamicInputsComponent;
  let fixture: ComponentFixture<ProductDynamicInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDynamicInputsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDynamicInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
