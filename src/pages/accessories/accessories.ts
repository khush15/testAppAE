import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HEADERCONSTANTS} from "../../constants/headerConstants";

/**
 * Generated class for the AccessoriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-accessories',
  templateUrl: 'accessories.html',
})
export class AccessoriesPage {

  header =HEADERCONSTANTS.accessories;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccessoriesPage');
  }

}
