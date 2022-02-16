import {Component, OnInit} from "@angular/core";
import {ModuleModel} from "../module.model";
import {TeacherModel} from "../../teacher/teacher.model";
import {TeacherService} from "../../teacher/teacher.service";
import {ModuleService} from "../module.service";
import {SectorService} from "../sector.service";
import {SectorModel} from "../sector.model";
import {SubjectModel} from "../subject.model";
import {SectorComponent} from "../sector.component";

@Component({
  selector: 'app-sector-add-module',
  templateUrl: 'add-module.component.html',
  styleUrls: ['add-module.component.css']
})
export class AddModuleComponent implements OnInit {
  public module: ModuleModel = new ModuleModel();
  public teachers!: TeacherModel[];
  public sector!: SectorModel;

  constructor(private teacherService: TeacherService, private sectorComponent: SectorComponent) { }

  ngOnInit() {
    this.teacherService.getAllFullTimeTeachers().subscribe((response) => this.teachers = response);
    this.module.moduleManager = new TeacherModel();
  }

  public addModule(module: ModuleModel) : void {
    this.teacherService.findFullTimeTeacherById(module.moduleManager.id).subscribe((response) => this.sectorComponent.addModuleToSector(module, response));
    this.module = new ModuleModel();
    this.module.moduleManager = new TeacherModel();
  }

}
