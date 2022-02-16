import {Component, OnInit} from "@angular/core";
import {SubjectModel} from "../subject.model";
import {TeacherModel} from "../../teacher/teacher.model";
import {TeacherService} from "../../teacher/teacher.service";
import {SectorComponent} from "../sector.component";

@Component({
  selector: 'app-sector-add-subject',
  templateUrl: 'add-subject.component.html',
  styleUrls: ['add-subject.component.css']
})
export class AddSubjectComponent implements OnInit {
  public subject: SubjectModel = new SubjectModel();
  public teachers!: TeacherModel[];
  public selectedTeacher!: number;

  constructor(private teacherService : TeacherService, private sectorComponent: SectorComponent) { }

  ngOnInit() {
    this.getAllTeachers();
    this.subject.teacher = new TeacherModel();
  }

  public getAllTeachers() : void {
    this.teacherService.getAllTeachers().subscribe((response) => this.teachers = response);
  }

  public addSubject(subject: SubjectModel) : void {

    this.teacherService.findTeacherById(subject.teacher.id).subscribe((response) => this.sectorComponent.addSubjectToModule(subject, response, this.sectorComponent.actualModule));
    console.log(subject.id);
    this.subject = new SubjectModel();
    this.subject.teacher = new TeacherModel();
  }

}
