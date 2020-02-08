import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updatebalancerecord',
  templateUrl: './updatebalancerecord.page.html',
  styleUrls: ['./updatebalancerecord.page.scss'],
})
export class UpdatebalancerecordPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goBackword() {
    this.router.navigate(['/home']);
  }
}
