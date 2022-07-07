import {Component, Input, OnInit} from '@angular/core';

import {IProduct} from "../../interfaces";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input()
  product: IProduct | undefined

  constructor() { }

  ngOnInit(): void {
  }

}
