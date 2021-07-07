import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router'; 
import { ProdcutsService } from  './../prodcuts.service';
import {Product} from './../product.model';

@Component({
  selector: 'app-prodcut-detail',
  templateUrl: './prodcut-detail.component.html',
  styleUrls: ['./prodcut-detail.component.scss']
})
export class ProdcutDetailComponent implements OnInit {

  product:Product;

  constructor(
    private route: ActivatedRoute,
    private productsService : ProdcutsService
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.product = this.productsService.getProduct(id);
      
    })
  }

}
