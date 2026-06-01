import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-quizes',
  templateUrl: './quizes.page.html',
  styleUrls: ['./quizes.page.scss'],
  providers:[QuizService]
})
export class QuizesPage implements OnInit {
  quizes: any= [];

  constructor(public qs: QuizService,private router:Router) { }

  openQuiz(quiz){
    // this.navCtrl.push(QuizPage,{'quiz': quiz});

    let navigationExtras: NavigationExtras = {
      state: {
        quiz: quiz
      }
    };
    console.log(navigationExtras);
    this.router.navigate(['quiz'], navigationExtras);
  }

  ngOnInit() {
    this.qs.getQuizes().subscribe((quizes)=>this.quizes= quizes);
  }

}
