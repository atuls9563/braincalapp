import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ElPlusCatPage } from './el-plus-cat.page';

describe('ElPlusCatPage', () => {
  let component: ElPlusCatPage;
  let fixture: ComponentFixture<ElPlusCatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElPlusCatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ElPlusCatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
