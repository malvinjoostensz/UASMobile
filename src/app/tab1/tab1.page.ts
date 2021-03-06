import { Component, OnInit } from '@angular/core';
import {Tab1Service} from './tab1.service';
import {Ta1} from './ta1.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  tab1: Ta1[];
  constructor(
      private tab1Service: Tab1Service
  ) {}

  ngOnInit() {
    this.tab1 = this.tab1Service.getAllTab1();
  }

  // async searchbar() {
  //   const searchbar = document.querySelector('ion-searchbar');
  //   const items = Array.from(document.querySelector('ion-list').children);
  //
  //   searchbar.addEventListener('ionInput', handleInput);
  //
  //   function handleInput(event) {
  //     const query = event.target.value.toLowerCase();
  //     requestAnimationFrame(() => {
  //       items.forEach(item => {
  //         const shouldShow = item.textContent.toLowerCase().indexOf(query) > -1;
  //         item.style.display = shouldShow ? 'block' : 'none';
  //       });
  //     });
  //   }
  // }

}
