import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, from } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({ 
  'Access-Control-Allow-Credentials' : 'true',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, PUT, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
  'Content-Type':  'application/json',
})
};

@Injectable({
  providedIn: 'root'
})

export class UrlcheckService {

  apiurl = "https://api.shrtco.de/v2/";

  constructor(private http: HttpClient) {
    
  }

  Urlshort(url) : Observable<any> {
    return this.http.get<any>(this.apiurl+'/shorten?url='+url)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    // window.alert(errorMessage); 
    console.log(errorMessage)
    return throwError(errorMessage);
 }
}
