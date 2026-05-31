import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
//import { Observable } from 'rxjs/Rx';
//import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
//import 'rxjs/Rx';
import { AppConstants } from '../shared/app.constants';
//import { HttpClientModule } from '@angular/common/http'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
//import 'rxjs/add/observable/of';
//import { of } from 'rxjs';

@Injectable()
export class PostService {
    public static POSTS_PER_PAGE = 10;
    // constructor(private http: Http) {

    // }

    constructor(private http: HttpClient)
    {}

    // public getPosts(page: number = 1, type = "tricks"): Observable<any> {
    //     return this.http.get(AppConstants.POSTS_URL + type + "?cr=1&page=" + page + "&per_page=" + PostService.POSTS_PER_PAGE).map(data => data.json());
    // }

    public getPosts(page: number = 1, type = "tricks"): Observable<any> {
        // const request = this.http.get().pipe(
        //     map((res) => res.data)),
        //     catchError(error => Observable.of(null))
        //   );

        return this.http.get(AppConstants.POSTS_URL + type + "?cr=1&page=" + page + "&per_page=" + 
        PostService.POSTS_PER_PAGE).pipe(map(data => data)
        //,
        //catchError(error => Observable.of(null))
        // , catchError((err, caught) => {
        //     return empty();
        //   })
        );
    }

    public getPost(id: number, type = "tricks"): Observable<any> {
        //return this.http.get(AppConstants.POSTS_URL + type + "/" + id).map(data => data.json());
        
        return this.http.get(AppConstants.POSTS_URL + type + "/" + id).pipe(map(data => data));
    }

    public searchPosts(search: string, type = "tricks"): Observable<any> {
        //return this.http.get(AppConstants.POSTS_URL + type + "?cr=1&page=1&per_page=" + PostService.POSTS_PER_PAGE + "&search=" + search).map(data => data.json());

        return this.http.get(AppConstants.POSTS_URL + type + "?cr=1&page=1&per_page=" + PostService.POSTS_PER_PAGE + "&search=" + search).pipe(map(data => data));
    }

    public getPostsByIds(ids: string, page: number = 1) {
        if (!ids)
            ids = "0";

        if (ids.indexOf(",") >= 0) {
            let tempIds: string[] = ids.split(',');
            let validIds: number[] = [];
            for (let i = 0; i < tempIds.length; i++) {
                let validId: number = parseInt(tempIds[i]);
                if (!isNaN(validId))
                    validIds.push(parseInt(tempIds[i]));
            }
            if (validIds.length > 0) {
                ids = validIds.join();
            }
        }
        //return this.http.get(AppConstants.POSTS_URL + "posts?type[]=spanish&type[]=english&type[]=hindi&type[]=french&type[]=tricks&type[]=general_knowledge&type[]=11_plus&cr=1&include=" + ids + "&page=" + page + "&per_page=" + PostService.POSTS_PER_PAGE).map(data => data.json());

        return this.http.get(AppConstants.POSTS_URL + "posts?type[]=spanish&type[]=english&type[]=hindi&type[]=french&type[]=tricks&type[]=general_knowledge&type[]=11_plus&cr=1&include=" + ids + "&page=" + page + "&per_page=" + PostService.POSTS_PER_PAGE).pipe(map(data => data));
    }

    public getPostsByTaxonomy(page: number = 1, type = "tricks", tax: string, taxId): Observable<any> {
        // return this.http.get(`${AppConstants.POSTS_URL}${type}?${tax}=${taxId}&cr=1&page=${page}&per_page=${PostService.POSTS_PER_PAGE}`).map(data => data.json());

        return this.http.get(`${AppConstants.POSTS_URL}${type}?${tax}=${taxId}&cr=1&page=${page}&per_page=${PostService.POSTS_PER_PAGE}`).pipe(map(data => data));
    }

    public getMyPlan(userid): Observable<any> {
        var hash = "EB46F14D6E44B1472AA818248116FF65";
        var type = "plan/details";
        //return this.http.get(`${AppConstants.PLAN_URL}${type}?hash=${hash}&userid=${userid}`).map(data => data.json());

        return this.http.get(`${AppConstants.PLAN_URL}${type}?hash=${hash}&userid=${userid}`).pipe(map(data => data));
    }
    public subscribePlan(signature, userid, reciept, transactionId, product_id, amount, device_type): Observable<any> {
        var hash = "EB46F14D6E44B1472AA818248116FF65";
        var type = "subscribe/plan";
        // return this.http.get(`${AppConstants.PLAN_URL}${type}?device_type=${device_type}&transaction_id=${transactionId}&product_id=${product_id}&amount=${amount}&signature=${signature}&hash=${hash}&receipt=${reciept}&userid=${userid}`).map(data => data.json());

        return this.http.get(`${AppConstants.PLAN_URL}${type}?device_type=${device_type}&transaction_id=${transactionId}&product_id=${product_id}&amount=${amount}&signature=${signature}&hash=${hash}&receipt=${reciept}&userid=${userid}`).pipe(map(data => data));
    }

}
