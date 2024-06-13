import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../services/product/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'] // Corrected 'styleUrl' to 'styleUrls'
})
export class ProductsComponent {
  sidePanelVisible: boolean = true;
  //  PRODUCT OBJECT FROM THE API
  productObj: any = {
    productId: 0,
    productSku: "",
    productName: "",
    productPrice: 0,
    productShortName: "",
    productDescription: "",
    createdDate: new Date(),
    deliveryTimeSpan: "",
    categoryId: "",
    productImageUrl: ""
  };


  constructor(private productSrv: ProductService){

  }
  openSidePanel() {
    this.sidePanelVisible = true;
  }

  closeSidePanel() {
    this.sidePanelVisible = false;
  }
}
