
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Property } from './property';
@Injectable()
export class PropertyService {
  private propertiesUrl = 'http://localhost:8000/api/properties/';  // URL to web API
  constructor (private http: Http) {}
  getProperties(): Observable<Property[]> {
    return this.http.get(this.propertiesUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  getProperty(id){
    return this.http.get(this.propertiesUrl + id + "/")
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  private extractData(res: Response) {
    let body = res.json();
    console.log(body)
    return body || { };
  }
  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
