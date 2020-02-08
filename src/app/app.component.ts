import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { MatDialog } from '@angular/material';
import { ConfirmationpopupPage } from './pages/confirmationpopup/confirmationpopup.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  navigate;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu: MenuController,
    private router : Router
  ) {
    this.sideMenu();
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  sideMenu()
  {
    this.navigate =
    [
      {
        title : "Add Customer",
        url   : "/addcustomer",
        icon  : "person"
      },
      {
        title : "Customer List",
        url   : "/home",
        icon  : "person"
      },
      {
        title : "Update balance",
        url   : "/updatebalancerecord",
        icon  : "chatboxes"
      },
      {
        title : "Log Out",
        url   : "/login",
        icon  : "log-out"
      }
    ]
  }


  logout() {

    // let send_data = {};
    // send_data['text'] = "Do you really want to logout ?";
    // send_data['button2'] = "Cancel";
    // send_data['button1'] = "Logout";

    // const dialogRef = this.dialog.open(ConfirmationpopupPage, {
    //   width: '450px',
    //   data: send_data
    // });

    // dialogRef.afterClosed().subscribe(result => {

    //   console.log("result", result);
    //   if (result['is_success'] == 1) {
    //     this.storage.remove('cepl_user_data').then(() => {

    //       this.router.navigate(['login']);
    //     })
    //   }
    // });

  }

}
