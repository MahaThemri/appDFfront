import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { LoginComponent } from './login/login.component';
import { PhotosComponent } from './photos/photos.component';
import { AddClaimComponent } from './add-claim/add-claim.component';
import { Details2Component } from './details2/details2.component';
import { ModifydetailsComponent } from './modifydetails/modifydetails.component';
import { AddComponent } from './add/add.component';



@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    LoginComponent,
    PhotosComponent,
    AddClaimComponent,
    Details2Component,
    ModifydetailsComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
