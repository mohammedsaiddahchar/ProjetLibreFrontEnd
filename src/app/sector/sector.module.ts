import {NgModule} from "@angular/core";
import {SectorComponent} from "./sector.component";
import {AppRoutingModule} from "../app-routing.module";
import {SectorLevelComponent} from "./level/sector-level.component";
import {SectorNameComponent} from "./name/sector-name.component";

@NgModule({
    imports: [
        AppRoutingModule
    ],
    declarations: [
        SectorComponent,
        SectorNameComponent,
        SectorLevelComponent
    ]
})
export class SectorModule { }
