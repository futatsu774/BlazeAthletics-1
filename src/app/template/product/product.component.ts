import { ProductsService } from '../../service/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: any[];

  constructor(service : ProductsService) {

this.product = service.getProduct();
   }

  ngOnInit(): void {
  }

}
