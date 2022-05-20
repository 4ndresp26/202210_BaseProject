import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SerieModule } from './serie/serie.module';
import { SerieListComponent } from './serie/serie-list/serie-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SerieListComponent
  ],
  imports: [
    BrowserModule,
    SerieModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
