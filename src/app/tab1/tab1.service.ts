import { Injectable } from '@angular/core';
import {Ta1} from './ta1.model';

@Injectable({
  providedIn: 'root'
})
export class Tab1Service {
  private tab1: Ta1[] = [
    {
      id: 'ab',
      title: 'Malvin Joostensz',
      imageUrl: 'https://scontent.fcgk25-1.fna.fbcdn.net/v/t1.0-9/123694106_362720211480340_760847655306211573_o.jpg?_nc_cat=100&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeFQJisWh6F9TMbj-rHdszoH7RFqeGNLdU7tEWp4Y0t1TnlWjzY_g1LspcmmDpr5kjaa1Vj1geu9XldWhsaUxvf-&_nc_ohc=7_lgr7elXzAAX-nBTU6&_nc_ht=scontent.fcgk25-1.fna&oh=1bdea148e3fdf6d73c6f3d754bbeb499&oe=5FE80F24',
      description: ['YouTuber'],
      description2: ['Mempunyai skill dalam bermain game']
    }
  ];
  constructor() { }

  getAllTab1() {
    return [...this.tab1];
  }

  getTa1(ta1Id: string) {
    return {...this.tab1.find(ta1 => {
        return ta1.id === ta1Id;
      })};
  }
}
