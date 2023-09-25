import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NamePipe } from './name.pipe';
// import { DragDirectiveDirective } from './drag-directive.directive';
@NgModule({
  declarations: [
    AppComponent,
    NamePipe,
    // DragDirectiveDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
