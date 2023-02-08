import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeroCardComponent } from './hero-card/hero-card.component';

import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent, 
    HeroCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
