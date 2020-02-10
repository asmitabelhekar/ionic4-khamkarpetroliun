import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatDialog, MatAutocompleteModule, MatInputModule } from '@angular/material'
import { FlexLayoutModule } from '@angular/flex-layout'
import { ConfirmationpopupPage } from './pages/confirmationpopup/confirmationpopup.page';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgMatSearchBarModule } from 'ng-mat-search-bar';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
     IonicModule.forRoot(),
     AppRoutingModule,
      BrowserAnimationsModule,
      MatFormFieldModule,
      FlexLayoutModule,
     HttpClientModule,
     NgMatSearchBarModule,
     MatAutocompleteModule,
     MatFormFieldModule,
     FormsModule,
     ReactiveFormsModule,
     MatInputModule
      
    ],
    exports: [
      MatFormFieldModule,
      MatInputModule,
        ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
