import { Injectable } from '@angular/core';
import {Ta1} from './ta1.model';
import {AngularFireList} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class Tab1Service {
  private tab1: Ta1[] = [];
  // tab1Ref: AngularFireList<Tab1> = null;
  constructor() { }

  getAllTab1() {
    return [...this.tab1];
  }

  create(ta1: Ta1): any {
    // return this.tab1Ref.push(ta1);
  }
}
