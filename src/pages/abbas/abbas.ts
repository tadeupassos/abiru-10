import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { FrutasPage } from '../frutas/frutas';
import { VegetaisPage } from '../vegetais/vegetais';

@Component({
  selector: 'page-abbas',
  templateUrl: 'abbas.html',
})
export class AbbasPage {

  tab1Root: any = HomePage;
  tab2Root: any = FrutasPage;
  tab3Root: any = VegetaisPage;  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbbasPage');
  }

}
