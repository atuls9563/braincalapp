import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LangCatPage } from './lang-cat.page';

describe('LangCatPage', () => {
  let component: LangCatPage;
  let fixture: ComponentFixture<LangCatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LangCatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LangCatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
