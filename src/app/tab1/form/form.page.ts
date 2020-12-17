import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Ta1} from '../ta1.model';
import {Tab1Service} from '../tab1.service';
import {Router} from '@angular/router';
import {Tab1} from '../tab1';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  constructor(
      private router: Router,
      private tab1Srv: Tab1Service
  ) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form);

    this.tab1Srv.create(form.value).then(res => {
      console.log(res);
      this.router.navigateByUrl('/tabs/tab1');
    }).catch(error => console.log(error));

    form.reset();
    this.router.navigateByUrl('/tabs/tab1');

    // const tab1: Tab1 = {
    //   email: form.value.email
    // };
    // this.tab1Srv.addTab1(tab1);
    // this.router.navigateByUrl('/tabs/tab1');
  }

}
