import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

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
    private menu: MenuController
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
        title : "Customer",
        url   : "/sites",
        icon  : "home"
      },
      {
        title : "Record",
        url   : "/updateamountrecord",
        icon  : "home"
      },
      {
        title : "About App",
        url   : "/about-app",
        icon  : "chatboxes"
      },
      {
        title : "Terms and Conditions",
        url   : "/terms-conditions",
        icon  : "contacts"
      },
      {
        title : "Log Out",
        url   : "",
        icon  : "log-out"
      }
    ]
  }
}
