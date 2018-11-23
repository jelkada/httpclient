import {Component, OnInit} from '@angular/core';
import {HttpService} from './http.service';

import {Book} from './book.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {

  appName = this.httpService.getAppName();
  books: Book[];
  selectedLanguage = '';

  servers = [
    {
      name: 'Testserver',
      capacity: 10,
      id: this.generateId()
    },
    {
      name: 'Liveserver',
      capacity: 100,
      id: this.generateId()
    }
  ];

  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    console.log('ngOnInit()');
  }

  onSave() {
    this.httpService.saveServers(this.servers)
      .subscribe(
        (response) => { console.log('onSave(): response: ',  response); },
        (error) => { console.log('onSave(): error: ' + error); }
      );
  }

  onGet() {
    this.httpService.getServers()
      .subscribe(
        (response: any) => {
          console.log('onGet(): response: ', response);
          this.servers = response;
        },
        (error) => { console.log('onGet(): error: ' + error); }
      );
  }

  onChangeLanguage() {
    this.httpService.getBooks(this.selectedLanguage)
      .subscribe(
        (response: Book[]) => this.books = response,
        error => console.log(error)
      );
  }

  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }

  private generateId() {
    return Math.round(Math.random() * 10000);
  }

}
