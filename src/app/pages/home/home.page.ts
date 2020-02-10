import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { LoaderserviceService } from 'src/app/services/loaderservice.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  options: string[] = ['One', 'Two', 'Three'];
  constructor(private menu: MenuController,
    private router: Router,
    private apiCall: LoaderserviceService) {
    this.getList();
  }


  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

  nextPage() {
    this.router.navigate(['/addcustomer']);
  }

  getList() {
    let url = "http://www.mocky.io/v2/5e3fd41d3300004c00b04c7c";

    this.apiCall.get(url).subscribe(MyResponse => 
      {
      alert("success response:" + JSON.stringify(MyResponse));
    }, 
    error => {
      alert("Failure response: " + error);
    })
  }
}
