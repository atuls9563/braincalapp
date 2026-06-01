import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ElPlusListPage } from './el-plus-list.page';

describe('ElPlusListPage', () => {
  let component: ElPlusListPage;
  let fixture: ComponentFixture<ElPlusListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElPlusListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ElPlusListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
