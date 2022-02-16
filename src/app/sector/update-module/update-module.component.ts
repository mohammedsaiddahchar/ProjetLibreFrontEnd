import {Component, Input, OnInit} from "@angular/core";
import {ModuleModel} from "../module.model";
import {TeacherModel} from "../../teacher/teacher.model";
import {TeacherService} from "../../teacher/teacher.service";
import {SectorComponent} from "../sector.component";
import {SubjectService} from "../subject.service";

@Component({
  selector: 'app-sector-update-module',
  templateUrl: 'update-module.component.html',
  styleUrls: ['update-module.component.css']
})
export class UpdateModuleComponent implements OnInit {
  @Input() module!: ModuleModel;
  public teachers!: TeacherModel[];


  ngOnInit() {
    this.getAllTeachers();
  }

  constructor(private teacherService : TeacherService, private sectorComponent: SectorComponent) { }

  public updateModule(module: ModuleModel) : void {

  }

  public getAllTeachers() : void {
    this.teacherService.getAllTeachers().subscribe((response) => this.teachers = response);
  }

}
