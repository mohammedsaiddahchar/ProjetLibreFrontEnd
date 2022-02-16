import {NgModule} from "@angular/core";
import {SectorComponent} from "./sector.component";
import {AppRoutingModule} from "../app-routing.module";
import {SectorLevelComponent} from "./level/sector-level.component";
import {SectorNameComponent} from "./name/sector-name.component";
import {CommonModule} from "@angular/common";
import { AddSubjectComponent } from "./add-subject/add-subject.component";
import {FormsModule} from "@angular/forms";
import {AddModuleComponent} from "./add-module/add-module.component";
import {UpdateSubjectComponent} from "./update-subject/update-subject.component";
import {UpdateModuleComponent} from "./update-module/update-module.component";

@NgModule({
  imports: [
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
    declarations: [
        SectorComponent,
        SectorNameComponent,
        SectorLevelComponent,
        AddSubjectComponent,
        UpdateSubjectComponent,
        AddModuleComponent,
        UpdateModuleComponent
    ]
})
export class SectorModule { }
