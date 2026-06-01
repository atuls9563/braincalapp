import { Injectable } from '@angular/core';
//import { Http} from '@angular/http';
//import {Observable} from 'rxjs/Rx';
//import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
//import 'rxjs/Rx';
import { AppConstants } from '../shared/app.constants';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class QuizService {

    // constructor(private http: Http){

    // }

    constructor(private http: HttpClient) {

    }

    public getQuizes(): Observable<any> {
        // return this.http.get(AppConstants.QUIZ_URL + 'quiz_names').map(data=> data.json());

        return this.http.get(AppConstants.QUIZ_URL + 'quiz_names').pipe(map(data => data));
    }

    public getQuestions(id): Observable<any> {
        // return this.http.get(AppConstants.QUIZ_URL + 'questions/' + id).map(data=> data.json());

        return this.http.get(AppConstants.QUIZ_URL + 'questions/' + id).pipe(map(data => data));
    }

}
