import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-product-new-admin',
  templateUrl: './product-new-admin.component.html',
  styleUrls: ['./product-new-admin.component.css']
})
export class ProductNewAdminComponent implements OnInit {

  name = 'Angular';
  
  productForm: FormGroup;
   
  constructor(private fb:FormBuilder) {
   
    this.productForm = this.fb.group({
      name: '',
      quantities: this.fb.array([]) ,
    });
  }
  
  quantities() : FormArray {
    return this.productForm.get("quantities") as FormArray
  }
   
  newQuantity(): FormGroup {
    return this.fb.group({
      qty: '',
      price: '',
    })
  }
   
  addQuantity() {
    this.quantities().push(this.newQuantity());
  }
   
  removeQuantity(i:number) {
    this.quantities().removeAt(i);
  }
   
  onSubmit() {
    console.log(this.productForm.value);
  }

  ngOnInit(): void {
  }

}
