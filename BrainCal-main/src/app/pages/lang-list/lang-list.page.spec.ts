import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LangListPage } from './lang-list.page';

describe('LangListPage', () => {
  let component: LangListPage;
  let fixture: ComponentFixture<LangListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LangListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LangListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
