import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HEADERCONSTANTS} from "../../constants/headerConstants";
import {ProductDescriptionPage} from "../product-description/product-description";

/**
 * Generated class for the ProductListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-list',
  templateUrl: 'product-list.html',
})
export class ProductListPage {
  header =HEADERCONSTANTS.productList;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  products = [
    {
      productImage:"assets/imgs/icons/img1.png",
      productTitle: "Apple-Iphone X",
      oldPrice:"Rs 91,000",
      newPrice:"Rs 88,000",
      rating:"4.1",
      discount: "10% OFF",
      pId:"AE0005"
    },
    {
      productImage:"assets/imgs/icons/img1.png",
      productTitle: "Apple-Iphone X",
      oldPrice:"Rs 91,000",
      newPrice:"Rs 88,000",
      rating:"4.1",
      discount: "10% OFF",
      pId:"AE0005"
    },
    {
      productImage:"assets/imgs/icons/img1.png",
      productTitle: "Apple-Iphone X",
      oldPrice:"Rs 91,000",
      newPrice:"Rs 88,000",
      rating:"4.1",
      discount: "10% OFF",
      pId:"AE0005"
    },
    {
      productImage:"assets/imgs/icons/img1.png",
      productTitle: "Apple-Iphone X",
      oldPrice:"Rs 91,000",
      newPrice:"Rs 88,000",
      rating:"4.1",
      discount: "10% OFF",
      pId:"AE0005"
    }
  ];
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductListPage');
  }
  openProductDescripton(){
    this.navCtrl.push(ProductDescriptionPage);
  }
}
