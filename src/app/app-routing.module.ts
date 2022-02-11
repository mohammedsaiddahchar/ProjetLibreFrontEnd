import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {TeacherComponent} from "./teacher/teacher.component";
import {SectorComponent} from "./sector/sector.component";
import {SectorLevelComponent} from "./sector/level/sector-level.component";
import {SectorNameComponent} from "./sector/name/sector-name.component";

const routes: Routes = [
  { 'path': 'teachers', component: TeacherComponent },
  {
    'path': 'sectors',
    component: SectorNameComponent,
    children: [
      {
        'path': ':sector',
        component: SectorLevelComponent,
        children: [
          {
            'path': ':level',
            component: SectorComponent
          }
        ]
      }
    ]
  }
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
