import {Component,Input,Output,EventEmitter,OnChanges, SimpleChanges, OnInit } from '@angular/core';

import {Product} from '../product.model';

@Component({
    selector : 'app-product',
    templateUrl : './product.component.html'
})
export class ProductComponent implements OnChanges, OnInit{

  @Input() product: Product;
  @Output() productClicked: EventEmitter<any>= new EventEmitter();

constructor() {
    console.log('1.constructor');
}

ngOnChanges (changes: SimpleChanges) {
    console.log('2.ngOnchanges');
    console.log(changes);
}

ngOnInit()  {
    console.log('3.ngOnInit');
}

  addCart() {
      console.log ('añadir al carrito');
      this.productClicked.emit(this.product.id);
  }
}