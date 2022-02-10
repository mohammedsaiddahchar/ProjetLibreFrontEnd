import { NgModule } from '@angular/core';
import {AddComponent} from "./add/add.component";
import {TeacherComponent} from "./teacher.component";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AddComponent,
    TeacherComponent
  ],
    imports: [
        CommonModule,
        FormsModule
    ],
  exports: [
    TeacherComponent
  ]
})
export class TeacherModule { }
