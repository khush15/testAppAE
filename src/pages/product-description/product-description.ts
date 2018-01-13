import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HEADERCONSTANTS} from "../../constants/headerConstants";

/**
 * Generated class for the ProductDescriptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-description',
  templateUrl: 'product-description.html',
})
export class ProductDescriptionPage {

  header = HEADERCONSTANTS.productDescription;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  productDetails = [
    {
      image: "assets/imgs/icons/img1.png",
    },
      {
          image: "assets/imgs/icons/img1.png",
      },
    ];

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductDescriptionPage');
  }

}
