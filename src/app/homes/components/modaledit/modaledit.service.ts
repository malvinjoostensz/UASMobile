import { Injectable } from '@angular/core';
import {Modaledit} from './modaledit';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ModaleditService {
  // private dbPath = '/modaledit';
  // modaleditRef: AngularFireList<Modaledit> = null;

  constructor(
      // private db: AngularFireDatabase
  ) {
    // this.modaleditRef = db.list(this.dbPath);
  }

  // getAll(): AngularFireList<Modaledit> {
  //   return this.modaleditRef;
  // }
  //
  // create(modaledit: Modaledit): any {
  //   return this.modaleditRef.push(modaledit);
  // }
}
