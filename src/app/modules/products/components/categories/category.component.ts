import {Component, OnInit} from '@angular/core';

import {
  CategoryService,
  DataCategoryService,
  DataProductsService,
  ProductsService,
  SelectedCategoryService
} from '../../services';
import {ICategory, ICategorySelected, IDataCategory, IDataProduct, IProduct} from '../../interfaces';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  resCategories: ICategory[];
  selectedCategory: ICategorySelected;

  constructor(private categoryService: CategoryService,
              private dataCategoryService: DataCategoryService,
              private selectedCategoryService: SelectedCategoryService,
              private productsService: ProductsService,
              private dataProductsService: DataProductsService
  ) {
  }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe((value) => {
      this.dataCategoryService.storageCategories.next(<IDataCategory>{'categories': value});
      this.dataCategoryService.storageCategories.subscribe(listProducts => {

        this.resCategories = listProducts.categories
      })
    })
  }

  getByCategory(id: string): void {
    this.selectedCategoryService.storageSelectedCategory.next({selectedCategory: id});
    this.selectedCategory = {'selectedCategory': id}
    this.productsService.getALl(this.selectedCategory.selectedCategory).subscribe(value => {
      this.dataProductsService.storageProducts.next(<IDataProduct>{'products': value});
    })
  }
}
