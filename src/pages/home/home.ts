import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HEADERCONSTANTS} from "../../constants/headerConstants";
import {ProductListPage} from "../product-list/product-list";
import {BrandsPage} from "../brands/brands";
import {AccessoriesPage} from "../accessories/accessories";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  header =HEADERCONSTANTS.homePage;

  slideIcons = [
    {
      productIcon: "assets/imgs/icons/smartphone.png",
      productTitle:"SmartPhones",
      component: AccessoriesPage
    },
    {
      productIcon: "assets/imgs/icons/mobile-accessories.png",
      productTitle:"Mobile Accessories"
    },
    {
      productIcon: "assets/imgs/icons/audioand-video.png",
      productTitle:"Audio & Video"
    },
    {
      productIcon: "assets/imgs/icons/laptop-accessories.png",
      productTitle:"Computer Accessories"
    },
    {
      productIcon: "assets/imgs/icons/laptop-accessories.png",
      productTitle:"SmartPhones"
    },
  ];
  trendingProducts = [
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


  constructor(public navCtrl: NavController) {
  }
  openProductList(){
    this.navCtrl.push(ProductListPage);
  }
  openBrands(){
    this.navCtrl.push(BrandsPage);
  }
  openPage(page){
    this.navCtrl.push(page.component);
  }
}
