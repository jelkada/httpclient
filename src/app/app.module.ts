import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import {HttpService} from './http.service';
import {ShowFirstPipe} from './show-first.pipe';
import {MyInterceptor1} from './my1.interceptor';
import {MyInterceptor2} from './my2.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ShowFirstPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ HttpService,
              { provide: HTTP_INTERCEPTORS, useClass: MyInterceptor1, multi: true },
              { provide: HTTP_INTERCEPTORS, useClass: MyInterceptor2, multi: true }
              ],
  bootstrap: [AppComponent]
})
export class AppModule { }
