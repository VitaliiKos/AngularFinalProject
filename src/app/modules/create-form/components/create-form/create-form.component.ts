import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from "@angular/router";

import {RegEx} from 'src/app/constant';
import {CategoryService, DataCategoryService, DataProductsService, ProductsService} from "../../../products/services";
import {ICategory, IDataProduct, IUpdateProduct} from "../../../products/interfaces";
import {UpdateProductService} from "../../../products/services/update-product.service";

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {

  form: FormGroup;
  productForUpdate: IUpdateProduct | null;
  allCategories: ICategory[];
  products: IDataProduct;

  constructor(private dataCategoryService: DataCategoryService,
              private categoryService: CategoryService,
              private updateProductService: UpdateProductService,
              private router: Router,
              private productsService: ProductsService,
              private dataProductsService: DataProductsService
  ) {
    this._creteForm()
  }

  ngOnInit(): void {
    this.dataCategoryService.storageCategories.subscribe(({categories}) => {
      this.allCategories = categories
    })

    this.updateProductService.storageUpdateProduct.subscribe(value => {
      this.productForUpdate = value
      this.form.setValue({
        name: this.productForUpdate.name,
        price: this.productForUpdate.price,
        stock: this.productForUpdate.stock,
        category: this.productForUpdate.category,
        description: this.productForUpdate.description
        // image: this.productForUpdate.image,
      })
    })

  }

  _creteForm(): void {
    // this.form = new FormGroup({
    //   name: new FormControl(null, [Validators.pattern(RegEx.name)]),
    //   category: new FormControl('-----', [Validators.pattern(RegEx.name)]),
    //   price: new FormControl(1, [Validators.min(0), Validators.max(1000000)]),
    //   stock: new FormControl(0, [Validators.min(0), Validators.max(1000000)]),
    //   description: new FormControl('Write your description', [Validators.pattern(RegEx.description)]),
    // })
  }


  save(): void {
    if (!this.productForUpdate?.id) {
      this.categoryService.create(this.form.value).subscribe(() => {
        this.form.reset()
        this.router.navigate(['products'])
      })
    } else {
      this.productsService.updateById(this.productForUpdate.id, this.form.value).subscribe(() => {
        this.dataProductsService.storageProducts.subscribe(res => {
          this.products = res
        })
        this.router.navigate([`products/product-detail/${this.productForUpdate?.id}`])
        this.updateProductService.storageUpdateProduct.next(
          {
            id: 0,
            image: null,
            name: '',
            price: '',
            stock: 0,
            description: '',
            category: ''
          }
        )

      })
    }

  }
}
