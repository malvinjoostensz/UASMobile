import {Component, OnInit, ViewChild} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {NgForm} from '@angular/forms';
import {Modaledit} from './modaledit';
import {AngularFireDatabase} from '@angular/fire/database';
import {ActivatedRoute, Router} from '@angular/router';
import {ModaleditService} from './modaledit.service';

@Component({
  selector: 'app-modaledit',
  templateUrl: './modaledit.component.html',
  styleUrls: ['./modaledit.component.scss'],
})
export class ModaleditComponent implements OnInit {
  // mahasiswa: any;
  // key: string;
  //
  // @ViewChild('f', null) f: NgForm;

  constructor(
      private modalCtrl: ModalController,
      // private activatedRoute: ActivatedRoute,
      // private meSrv: ModaleditService,
      // private db: AngularFireDatabase,
      // private router: Router
  ) { }

  ngOnInit() {
  }

  onClose() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  onSave() {
    this.modalCtrl.dismiss();
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  //
  //   this.meSrv.create(form.value).then(res => {
  //     console.log(res);
  //     this.router.navigateByUrl('/tabs/tab1');
  //   }).catch(error => console.log(error));
  //
  //   form.reset();
  //   this.router.navigateByUrl('/tabs/tab1');
  // }
}
