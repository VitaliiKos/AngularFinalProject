import {Component, OnInit} from '@angular/core';

import {SelectedCategoryService, DataProductsService, ProductsService} from "../../services";
import {ICategorySelected, IDataProduct, IProduct, IUpdateProduct} from "../../interfaces";
import {UpdateProductService} from "../../services/update-product.service";
import {ISession} from "../../../login/interfaces";
import {Router} from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  sessionStatus:ISession;
  title: string;
  res: IProduct[];
  selectedCategory: ICategorySelected;
  productRestart: IUpdateProduct

  constructor(
    private productsService: ProductsService,
    private dataProductsService: DataProductsService,
    private dataCategoryService: SelectedCategoryService,
    private updateProductService:UpdateProductService,
    private router:Router

    ) {
    this.sessionStatus = {status: Boolean(localStorage.getItem('status'))}
    this.title = !this.sessionStatus.status ? '/login' : 'post-new-add';

  }

  ngOnInit(): void {
    this.dataCategoryService.storageSelectedCategory.subscribe(value => {
      this.selectedCategory = value
    })
    this.productsService.getALl(this.selectedCategory.selectedCategory).subscribe(value => {
        this.dataProductsService.storageProducts.next(<IDataProduct>{'products': value});
        this.dataProductsService.storageProducts.subscribe(listProducts => {
          this.res = listProducts.products
        })

      }
    )
  }
  // sellProduct() {
  //   this.updateProductService.storageUpdateProduct.next(
  //     {
  //       id: 0,
  //       image: null,
  //       name: '',
  //       price: '',
  //       stock: 0,
  //       description: '',
  //       category: ''
  //     }
  //   )
  //
  // }
}
