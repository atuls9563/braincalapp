import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
  providers: [
    UserService,
    UtilService
  ]
})
export class FeedbackPage implements OnInit {

  feedbackForm: FormGroup;
  user: User;
  requestInProgress: boolean= false;

  constructor(private fb: FormBuilder
    ,private userService: UserService
    ,private alertCtrl: AlertController
    ,private router: Router
    ,private utilService: UtilService
    ) { }

  ngOnInit() {
    this.feedbackForm= this.fb.group({
      name: ['',Validators.compose([Validators.required])],
      message: ['',Validators.compose([Validators.required])]
    });

    this.userService.getUser().then(user=>{
        this.user= user;
        this.initializeData(user)
    });
  }

  initializeData(user: User){
    this.feedbackForm.controls.name.setValue(user.firstname);
  }

  showRequestInProgress(status: boolean){
    this.requestInProgress= status;
  }

  async showAlert(msg: string,title:string="Error") {
    const alert = await this.alertCtrl.create({
     header: title,
     message: msg,
     buttons: [
      {
        text: 'Dismiss',
        role: 'dismiss',
        handler: () => {
            // this.navCtrl.setRoot(HomePage);
            this.router.navigate(['home']);

        }
      }]
    });
    await alert.present();
  }

  send(valid){ 
    if(!valid)
        return;

     let name= this.feedbackForm.get('name').value;   
     let message= this.feedbackForm.get('message').value; 
     this.showRequestInProgress(true);
     this.utilService.sendFeedback(name,message,this.user).subscribe(data=>{
        this.showAlert('Thank you for your valuable feedback.',''); 
        this.showRequestInProgress(false);
     });
  }

}
