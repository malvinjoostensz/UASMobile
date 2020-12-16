import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {LoadingController, NavController, ToastController, } from '@ionic/angular';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-logins',
  templateUrl: './logins.page.html',
  styleUrls: ['./logins.page.scss'],
})
export class LoginsPage implements OnInit {
  constructor(
      public navCtrl: NavController, // public navParams: NavParams,
      private toastCtrl: ToastController,
      private authService: AuthService,
      private loadingCtrl: LoadingController,
      private router: Router
  ) {}

  ngOnInit() {}

  handleSubmit(form: NgForm) {
    console.log(form);

    this.loadingCtrl
        .create({ message: 'Loading...', keyboardClose: true })
        .then((loadingEle) => {
          loadingEle.present();

          this.authService
              .login(form.value.email, form.value.password)
              .subscribe((res) => {
                loadingEle.dismiss();
                this.router.navigateByUrl('/tabs');
              });
        });
  }
}
