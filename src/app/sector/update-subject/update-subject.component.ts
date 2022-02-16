import {Component, EventEmitter, Input, Output} from "@angular/core";
import {SubjectModel} from "../subject.model";
import {ModuleModel} from "../module.model";
import {TeacherModel} from "../../teacher/teacher.model";
import {SectorModel} from "../sector.model";
import {TeacherService} from "../../teacher/teacher.service";
import {SectorComponent} from "../sector.component";
import {SubjectService} from "../subject.service";

@Component({
  selector: 'app-sector-update-subject',
  templateUrl: 'update-subject.component.html',
  styleUrls: ['update-subject.component.css']
})
export class UpdateSubjectComponent {
  public teachers!: TeacherModel[];
  public selectedTeacher!: number;
  @Input() subject!: SubjectModel


  constructor(private teacherService : TeacherService, private sectorComponent: SectorComponent, private subjectService: SubjectService) { }

  ngOnInit() {
    this.getAllTeachers();
    //console.log(this.sectorComponent.actualSubject.designation);
  }

  public getAllTeachers() : void {
    this.teacherService.getAllTeachers().subscribe((response) => this.teachers = response);
  }

  public updateSubject(subject: SubjectModel) : void {

    this.teacherService.findTeacherById(subject.teacher.id).subscribe((response) => this.sectorComponent.updateSubjectToModule(subject, response, this.sectorComponent.actualModule));
    console.log(subject.id);
  }

  public getSubject(id: number) {
    this.subjectService.findSubject(id).subscribe((response) => this.subject = response);
  }



}
