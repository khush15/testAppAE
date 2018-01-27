import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HEADERCONSTANTS} from "../../constants/headerConstants";

/**
 * Generated class for the DeliveryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-delivery',
  templateUrl: 'delivery.html',
})
export class DeliveryPage {

    header = HEADERCONSTANTS.deliveryPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeliveryPage');
  }

}
