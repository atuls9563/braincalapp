import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ElPlusPage } from './el-plus.page';

describe('ElPlusPage', () => {
  let component: ElPlusPage;
  let fixture: ComponentFixture<ElPlusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElPlusPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ElPlusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
