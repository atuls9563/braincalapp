import {Injectable} from '@angular/core';
//import { Http } from '@angular/http';
//import {Observable} from 'rxjs/Rx';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';
//import 'rxjs/Rx';
import { AppConstants } from '../shared/app.constants';
import { User } from '../models/user.model';
import { HttpClient }  from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable()
export class UtilService{

    // constructor(private http: Http){

    // }

    constructor(private http: HttpClient){

    }

    public sendFeedback(name,message,user: User): Observable<any>{
       let requestData: any={name:name,message:message,mobile: user.mobile};
       return this.http.post(AppConstants.SEND_FEEDBACK,JSON.stringify(requestData));
    }
}
