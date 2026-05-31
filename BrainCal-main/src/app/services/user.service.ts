import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
//import { Http } from '@angular/http';
//import {Observable} from 'rxjs/Rx';
import { User } from '../models/user.model';
import { AppConstants } from '../shared/app.constants';
//import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
//import 'rxjs/Rx';

import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import 'rxjs/add/operator/mergeMap';
import { catchError, map } from 'rxjs/operators';


@Injectable()
export class UserService{
   
    // constructor(private http: Http,private storage: Storage){

    // }

    constructor(private http: HttpClient,private storage: Storage){

    }

    public doLogin(mobile: string,countryCode:string): Observable<any>{
        // return this.getRegisterNonce().flatMap((data)=> this.doRegisterLogin(data.json(),mobile,countryCode)).map(response=>response.json());
        return this.getRegisterNonce().flatMap((data)=> this.doRegisterLogin(data,mobile,countryCode)).pipe(map(response=>response));
    }

    public getRegisterNonce(){
        return this.http.get(AppConstants.REG_NONCE_URL);
    }

    public verifyOTP(mobile: string,countryCode:string,otp: number,otp_session: string): Observable<any>{
        let url= AppConstants.CUSTOM_REG_URL + "?mobile=" + mobile + "&countryCode=" +  countryCode + "&otp_session=" + otp_session + "&otp=" + otp;
        // return this.sendOTP(url).map(response=>response.json());

        return this.sendOTP(url).pipe(map(response=>response));
    }

    private sendOTP(url: any){
        return this.http.get(url);
    }

    public doRegisterLogin (data: any,mobile: string,countryCode:string) : Observable<any> {
        let url= AppConstants.CUSTOM_REG_URL + "?mobile=" + mobile + "&countryCode=" +  countryCode + "&nonce=" + data.nonce;
        return this.http.get(url);
    }

    /* This method saves user locally on device */
    public saveUser(user: User){  
     this.storage.set('userData', user);
    }

    /* Save cookie for user authentication */
    public saveAuthCookie(cookie: string){
      this.storage.set('authCookie',cookie);
    }

    public getUser():Promise<any>{
      return this.storage.get('userData');
    }

    // public saveFavorites(favorites: number[],cookie){
    //     let requestData: any= {
    //         cookie: cookie,
    //         meta_key: 'favorites',
    //         meta_value: favorites.map(Number).toString()
    //     } 
    //     // return this.http.post(AppConstants.UPDATE_PROFILE,JSON.stringify(requestData)).map(data=>data.json());
    //     // return this.http.post(AppConstants.UPDATE_PROFILE,JSON.stringify(requestData)).pipe(map(data=>data));

    //     // console.log(requestData);

    //     return this.http.post(AppConstants.UPDATE_PROFILE,JSON.stringify(requestData))
    //     .pipe(map(data=>
    //         {
    //             console.log(data);
    //             data;
    //         }));


    //         // return this.http.post<any>(AppConstants.UPDATE_PROFILE, requestData ,{ observe: 'response'})
    //         // .pipe(
    //         //   map(response => {
    //         //     return response.headers;
    //         //   })).subscribe(data => console.log(data));
    // }

    public saveFavorites(favorites: number[],cookie):Observable<User>{
        let requestData: any= {
            cookie: cookie,
            meta_key: 'favorites',
            meta_value: favorites.map(Number).toString()
        } 
        // return this.http.post(AppConstants.UPDATE_PROFILE,JSON.stringify(requestData)).map(data=>data.json());
        // return this.http.post(AppConstants.UPDATE_PROFILE,JSON.stringify(requestData)).pipe(map(data=>data));


        return this.http.post<User>(AppConstants.UPDATE_PROFILE,JSON.stringify(requestData));
        // .pipe(map(data=>
        //     {
        //         console.log(data);
        //         if(data.hasOwnProperty('user')){
        //             console.log(54);
        //             console.log(data);
        //             // this.saveUser(data);
        //         }
        //         data;
        //     }));

        // return this.http.post(AppConstants.UPDATE_PROFILE,JSON.stringify(requestData))
        // .pipe(map(data=>
        //     {
        //         // console.log(data);
        //         // if(data.hasOwnProperty('user')){
        //         //     console.log(54);
        //         //     console.log(data);
        //         //     // this.saveUser(data);
        //         // }
        //         data;
        //     }));
    }

    public getAuthCookie(){
        return this.storage.get("authCookie");
    }

    public updateUser(user: User,cookie: string):Observable<any>{
   
        let requestData: any= {
            cookie: cookie,
            meta_key: 'first_name,last_name,mobile,email',
            meta_value: user.firstname + "," + user.lastname + "," + user.mobile + "," + user.email
        } 
        // return this.http.post(AppConstants.UPDATE_PROFILE,JSON.stringify(requestData)).map(data=>data.json());

        return this.http.post(AppConstants.UPDATE_PROFILE,JSON.stringify(requestData)).pipe(map(data=>data));
     
    }

    public logout(){
        this.storage.remove('authCookie');
        this.storage.remove('userData');
    }

    public  registerUser(email: String,username: String,first_name:String=''){
        let requestData: any= {
            email: email,
            first_name: first_name,
            username: username,
            hash: 'EB46F14D6E44B1472AA818248116FF65'
        } 
        // return this.http.post(AppConstants.REG_URL,JSON.stringify(requestData)).map(data=>data.json());
        return this.http.post(AppConstants.REG_URL,JSON.stringify(requestData)).pipe(map(data=>data));
    }
}
