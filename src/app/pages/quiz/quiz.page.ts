import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { QuizService } from 'src/app/services/quiz.service';
import {TimerObservable} from "rxjs/observable/TimerObservable";
import { AppConstants } from 'src/app/shared/app.constants';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
  providers:[
    QuizService,
  ]
})
export class QuizPage implements OnInit {

  // @ViewChild('slides') slides: any;
  @ViewChild('slides') slides: any;
 
    slideOptions: any;
    questions: any= [];
    timeString:string= '';
    quiz:any;
    quizStarted: boolean= false;
    quizCompleted:boolean= false;
    showAnswers:boolean= false;
    totalScore:number= 0;
    countDownDate:any;
    requestInProgress: boolean= false;
    goBack= false;
    subscription: Subscription;
    slideCount: number = 1;
    
  constructor(private router: Router
    ,public qs: QuizService
    ,private alertCtrl: AlertController
    ,public navCtrl: NavController
    ) { 
    // this.quiz= navParams.get('quiz');

    if (this.router.getCurrentNavigation().extras.state) {
      this.quiz = this.router.getCurrentNavigation().extras.state.quiz;
    }   
  }

  ngOnInit() {
    this.quizCompleted = false;
    console.log(this.quizCompleted);
    this.goBack= false;
      this.requestInProgress=true;
      this.qs.getQuestions(this.quiz.ID).subscribe((response)=>{
        // this.alertCtrl.create({
        //   header: 'Confirmation',
        //   message: "Click Start button to begin the test: <br> There are " + response.questions.length + " questions. <br> You have " + response.q_time + " minutes.",
        //   buttons: [{
        //       text: 'Start',
        //       handler: () => {
        //         this.slides.slideNext();
        //         this.requestInProgress=false;
        //         this.questions= response.questions;
        //         this.countDownDate= new Date().getTime() + 1000*60*response.q_time ;
        //         this.quizStarted= true;
        //         let timer= TimerObservable.create(1000,1000);
        //         this.subscription = timer.subscribe(t => {
        //           this.timeString = this.startTimer()
        //         });
        //       }
        //   }, {
        //       role: 'cancel',
        //       text: 'Cancel',
        //       handler: () => {
        //           this.goBack= true;
        //           this.navCtrl.pop();
        //       }
        //   }]
        // }).present();

        this.showConfirmation(response);

        
      },error=>this.checkForResponseError(error));
  }

  startTimer():string{
    let now = new Date().getTime();
    let distance = this.countDownDate - now;
    if(distance<=0){
      this.slides.lockSwipes(false); 
      this.slides.slideTo(this.questions.length+1,0);
      this.quizFinished();
      this.slides.lockSwipes(true);
      this.subscription.unsubscribe();
      return '0m 0s';
    }
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    let timeStr =  minutes + "m " + seconds + "s ";
    return timeStr;
  }

  nextSlide(i){
    if(this.questions[i]){
      if(this.questions[i].selected_answer_index==null){
        // this.alertCtrl.create({
        //   title: 'Confirm leaving',
        //   message: 'You did not select any answer. Are you sure you want to continue?',
        //   buttons: [{
        //       text: 'OK',
        //       handler: () => {
        //         this.slides.lockSwipes(false); 
        //         this.slides.slideNext();
        //         let currentIndex = this.slides.getActiveIndex();
        //         if(currentIndex== this.questions.length){
        //           this.quizFinished();
        //         }
        //         this.slides.lockSwipes(true); 
        //       }
        //   }, {
        //       role: 'cancel',
        //       text: 'Cancel',
        //       handler: () => {
        //           //resolve(false);
        //       }
        //   }]
        // }).present();

        this.showAlertNextSlide();
      }
      else{
        
        this.questions[i].next= true;
        this.slides.lockSwipes(false); 
        this.slides.slideNext();
        let currentIndex = this.slides.getActiveIndex();
        console.log(this.questions.length);
        console.log(this.slideCount);
        // if(currentIndex== this.questions.length){
        //   this.quizFinished();
        // }

        if(this.slideCount== this.questions.length){
          this.quizFinished();
        }
        this.slides.lockSwipes(true); 
      }
      
    }
  }

  prevSlide(index){
    this.slides.slidePrev();
  }

  ionViewCanLeave():Promise<boolean>{
    return new Promise(resolve => {
      if((this.quizStarted && this.quizCompleted) || this.goBack==true){
        resolve(true);
      }
      else{
        // this.alertCtrl.create({
        //   title: 'Confirm leaving',
        //   message: 'Your test session will be lost.',
        //   buttons: [{
        //       text: 'Leave',
        //       handler: () => {
        //           resolve(true);
        //       }
        //   }, {
        //       text: 'Stay',
        //       handler: () => {
        //           resolve(false);
        //       }
        //   }]
        // }).present();

        this.showAlertionViewCanLeave(resolve);
      }
      
   });
  }
  
  slideChanged(){
    let currentIndex = this.slides.getActiveIndex();
    if(this.questions[currentIndex]){
      this.questions[currentIndex].next= true;
    }

    this.slides.getActiveIndex().then(index => {
      // console.log(index);
      this.slideCount = index + 1;
   });
  }

  selectAnswer(q,a){
    this.questions[q].selected_answer_index = a;
  }

  ionViewWillEnter(){
    this.slides.lockSwipes(true); 
  }

  quizFinished(){
    this.quizCompleted=true;
    this.quizStarted= false;    
    for(let i=0;i<this.questions.length;i++){
      let selected_answer= this.questions[i].selected_answer_index;
      if(selected_answer!=null){
        for(let j=0;j<this.questions[i].answers.length;j++){
          if(this.questions[i].answers[j].correct==true && j==selected_answer){
            this.totalScore +=  Math.trunc(this.questions[i].answers[j].point);
            this.questions[i].correct= true;
          }
        }
      }
    }
  }

  async showAlertionViewCanLeave(resolve) {
    const alert = await this.alertCtrl.create({
      header: 'Confirm leaving',
      message: 'Your test session will be lost.',
      buttons: [{
          text: 'Leave',
          handler: () => {
              resolve(true);
          }
      }, {
          text: 'Stay',
          handler: () => {
              resolve(false);
          }
      }]
    });
    await alert.present();
   }

   async showAlertNextSlide() {
    const alert = await this.alertCtrl.create({
      header: 'Confirm leaving',
      message: 'You did not select any answer. Are you sure you want to continue?',
      buttons: [{
        text: 'OK',
          handler: () => {
            this.slides.lockSwipes(false); 
            this.slides.slideNext();
            let currentIndex = this.slides.getActiveIndex();
            if(currentIndex== this.questions.length){
              this.quizFinished();
            }
            this.slides.lockSwipes(true); 
          }
        }, {
          role: 'cancel',
          text: 'Cancel',
          handler: () => {
            //resolve(false);
          }
      }]
    });
    await alert.present();
   }

   async showConfirmation(response) {
    const alert = await this.alertCtrl.create({
      header: 'Confirmation',
      message: "Click Start button to begin the test: <br> There are " + response.questions.length + " questions. <br> You have " + response.q_time + " minutes.",
      buttons: [{
          text: 'Start',
          handler: () => {
            this.slides.slideNext();
            this.requestInProgress=false;
            this.questions= response.questions;
            this.countDownDate= new Date().getTime() + 1000*60*response.q_time ;
            this.quizStarted= true;
            let timer= TimerObservable.create(1000,1000);
            this.subscription = timer.subscribe(t => {
              this.timeString = this.startTimer()
            });
          }
      }, {
          role: 'cancel',
          text: 'Cancel',
          handler: () => {
              this.goBack= true;
              this.navCtrl.pop();
          }
      }]
    });
    await alert.present();
   }

  async showAlert(msg: string,title:string="Error") {
    const alert = await this.alertCtrl.create({
     header: title,
     message: msg,
     buttons: ['Dismiss']
    });
    await alert.present();
   }

   
  checkForResponseError(err: any){ 
    try{
      let errorResponse= JSON.parse(err._body);
      if(errorResponse.code=="rest_post_invalid_page_number")
        return;
      if(errorResponse.error=="session_expired"){
          this.showAlert("Seems your session is expired. Please logout and login again.");
      }
      else
      this.showAlert(errorResponse.error);   
    }  catch(error){
       this.showAlert(AppConstants.JSON_ERROR); 
    }
  }

  

}
