import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {ProductsService} from "../../services";
import {IProduct, IUpdateProduct} from "../../interfaces";
import {UpdateProductService} from "../../services/update-product.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  productDetail: IProduct;
  productId: number;

  constructor(private productsService: ProductsService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private updateProductService:UpdateProductService
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      this.productId = id
    })
    this.productsService.getById(this.productId).subscribe(value => {
      console.log(value)
      this.productDetail = value
    })
  }

  delete(id: number) {
    this.productsService.deleteById(id).subscribe(() => {
        this.router.navigate(['products'])
      }
    )
  }

  update(productDetail: IUpdateProduct) {
    this.updateProductService.storageUpdateProduct.next(productDetail)
    this.router.navigate(['products/update-item'])
  }

  goBack() {
    this.router.navigate(['products'])
  }
}
