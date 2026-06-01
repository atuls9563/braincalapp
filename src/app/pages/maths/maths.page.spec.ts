import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MathsPage } from './maths.page';

describe('MathsPage', () => {
  let component: MathsPage;
  let fixture: ComponentFixture<MathsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MathsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MathsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
