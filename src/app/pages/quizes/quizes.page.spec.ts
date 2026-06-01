import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuizesPage } from './quizes.page';

describe('QuizesPage', () => {
  let component: QuizesPage;
  let fixture: ComponentFixture<QuizesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuizesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
