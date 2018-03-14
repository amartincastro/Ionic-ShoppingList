import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddShoppingitemPage } from './add-shoppingitem';

@NgModule({
  declarations: [
    AddShoppingitemPage,
  ],
  imports: [
    IonicPageModule.forChild(AddShoppingitemPage),
  ],
})
export class AddShoppingitemPageModule {}
