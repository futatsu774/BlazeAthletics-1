import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../service/products.service';

@Component({
  selector: 'app-product-inventory',
  templateUrl: './product-inventory.component.html',
  styleUrls: ['./product-inventory.component.css']
})
export class ProductInventoryComponent implements OnInit {

  product: any[];

  constructor(service : ProductsService) {

this.product = service.getProduct();
   }
  ngOnInit(): void {
  }

}
