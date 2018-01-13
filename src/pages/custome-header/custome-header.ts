import {Component, Input} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the CustomeHeaderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-custome-header',
  templateUrl: 'custome-header.html',
})
export class CustomeHeaderPage {

  private _header:{
    title:string,
    showLogo: boolean,
    showNotification:boolean,
    showSearch:boolean,
    showMenu:boolean,
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  get header(){
    return this._header;
  }
  @Input()
  set header(value){
    this._header = value;
  }

  ionViewDidLoad() {
  }

}
