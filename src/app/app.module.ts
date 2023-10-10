import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//importa o modulo http para enviar e receber requisições
// na nossa api
import { HttpClientModule } from "@angular/common/http"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule //colocando o modulo http no imports para ser reconhecido
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
