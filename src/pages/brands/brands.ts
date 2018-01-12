import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HEADERCONSTANTS} from "../../constants/headerConstants";

/**
 * Generated class for the BrandsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-brands',
  templateUrl: 'brands.html',
})
export class BrandsPage {

  header =HEADERCONSTANTS.brands;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BrandsPage');
  }

}
