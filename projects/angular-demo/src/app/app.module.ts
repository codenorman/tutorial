import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgifDemoComponent } from './ngif-demo/ngif-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    NgifDemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
