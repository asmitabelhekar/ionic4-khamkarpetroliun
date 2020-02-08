import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { LoaderserviceService } from 'src/app/services/loaderservice.service';

@Component({
  selector: 'app-confirmationpopup',
  templateUrl: './confirmationpopup.page.html',
  styleUrls: ['./confirmationpopup.page.scss'],
})
export class ConfirmationpopupPage implements OnInit {

  confirmationText: any;
  button1: any;
  button2: any;


  // constructor(
  //   public dialogRef: MatDialogRef<ConfirmationpopupPage>,
  //   public router: Router,
  //   @Inject(MAT_DIALOG_DATA) public data: any,
  //   public loader: LoaderserviceService,
  // ) { }

  ngOnInit() {
    // this.confirmationText = this.data['text'];
    // this.button1 = this.data['button1'];
    // this.button2 = this.data['button2'];
    // console.log("button1 text:" + this.button1);
    // console.log("button2 text:" + this.button2);
  }


  confirm(flag) {
    // let send_data = {};
    // send_data['is_success'] = flag;
    // this.dialogRef.close(send_data);
  }
}
