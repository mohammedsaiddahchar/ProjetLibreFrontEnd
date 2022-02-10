import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {TeacherComponent} from "./teacher/teacher.component";
import {SectorComponent} from "./sector/sector.component";

const routes: Routes = [
  { 'path': 'teachers', component: TeacherComponent },
  { 'path': 'sectors', component: SectorComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}

export const routingComponents = [TeacherComponent];
