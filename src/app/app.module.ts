import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContModule } from './cont/cont.module'
import { HttpModule } from '@angular/http';
import { AiInfoModule } from './ai-info/ai-info.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContModule,
    HttpModule,
    AiInfoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
