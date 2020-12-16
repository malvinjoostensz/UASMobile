import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignupsPage } from './signups.page';

describe('SignupsPage', () => {
  let component: SignupsPage;
  let fixture: ComponentFixture<SignupsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignupsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
