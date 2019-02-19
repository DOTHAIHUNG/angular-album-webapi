import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { PhotoComponent } from './photo/photo.component';
import { PhotodetailComponent } from './photodetail/photodetail.component';
import { PhotoEditComponent } from './photo-edit/photo-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotoComponent,
    PhotodetailComponent,
    PhotoEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
