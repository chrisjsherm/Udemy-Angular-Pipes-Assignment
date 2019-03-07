import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ReverseStringPipe } from './reverse-string.pipe';
import { SortByPropPipe } from './sort-by-prop.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ReverseStringPipe,
    SortByPropPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
