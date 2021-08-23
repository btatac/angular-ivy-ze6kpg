import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProdcutsService} from './services/products/prodcuts.service'

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    ProdcutsService
  ]
})
export class CoreModule { }
