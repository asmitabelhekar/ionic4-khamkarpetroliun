import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdatebalancerecordPage } from './updatebalancerecord.page';

describe('UpdatebalancerecordPage', () => {
  let component: UpdatebalancerecordPage;
  let fixture: ComponentFixture<UpdatebalancerecordPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatebalancerecordPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdatebalancerecordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
