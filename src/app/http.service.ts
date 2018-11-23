
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import 'rxjs/Rx';
import {ErrorObservable} from 'rxjs-compat/observable/ErrorObservable';
import {Book} from './book.model';

@Injectable()
export class HttpService {

  params = new HttpParams().set('language', 'English');
  headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) {
  }

  saveServers(servers: any[]) {
    return this.http.put('https://ng-test1-b1d39.firebaseio.com/data.json', servers, {headers: this.headers});
  }

  getServers() {
    return this.http.get('https://ng-test1-b1d39.firebaseio.com/data.json')
      .map(
        (response: Response) => {
          // @ts-ignore
          for (const server of response) {
            server.name = 'fetched_' + server.name;
          }
          return response;
        }
      )
      .catch (
        (error: Response) => {
          return ErrorObservable.create('something went wrong');
        }
    );
  }

  getBooks(language: string) {
    return this.http.get('https://api.myjson.com/bins/10wki6', {params: this.params})
      .map(
        (response: Book[]) => {
          let books: Book[];
          console.log('language: ' + language);
          if (language === 'All') {
            books = response;
            console.log('books: ', books);
          } else {
            books = response.filter(obj => obj.language === language);
          }
          console.log('books: ', books);
          return books;
        });
  }

  getAppName() {
    return this.http.get('https://ng-test1-b1d39.firebaseio.com/appName.json')
  }
}




