import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from ''

/**
 * Generated class for the AddShoppingitemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-shoppingitem',
  templateUrl: 'add-shoppingitem.html',
})
export class AddShoppingitemPage {
  item: Item = {
    name: '',
    quantity: 0,
    price: 0,
  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddShoppingitemPage');
  }

}
