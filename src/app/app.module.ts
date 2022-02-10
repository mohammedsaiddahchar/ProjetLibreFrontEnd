import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {AddFormUserComponent} from "./add-form-user/add-form-user.component";
import {FormsModule} from "@angular/forms";
import {SectorComponent} from "./sector/sector.component";
import {TeacherModule} from "./teacher/teacher.module";
import {RouterModule, Routes} from "@angular/router";
import {TeacherComponent} from "./teacher/teacher.component";
import {AppRoutingModule} from "./app-routing.module";
import {SectorModule} from "./sector/sector.module";

@NgModule({
  declarations: [
    AppComponent,
    AddFormUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    TeacherModule,
    SectorModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
