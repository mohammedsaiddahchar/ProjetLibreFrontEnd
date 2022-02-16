import {Component} from "@angular/core";
import {TeacherService} from "../teacher.service";
import {TeacherModel} from "../teacher.model";
import {TeacherComponent} from "../teacher.component";

@Component({
  selector: 'app-teacher-add',
  templateUrl: 'add.component.html',
  styleUrls: ['add.component.css']
})
export class AddComponent {

  public teacher: TeacherModel = new TeacherModel();
  public status: string = '';

  constructor(private teacherService: TeacherService, private teacherComponent: TeacherComponent) { }

  public addTeacher(teacher: TeacherModel) : void {
    const container = document.getElementById('main-container');
    if (this.status === 'fulltime') {
      this.teacher.type = 'fulltimeteacher';
      this.teacherService.addTeacher(teacher).subscribe((response) => this.teacherComponent.getAllTeachers());
      this.teacher = new TeacherModel();
      this.status = '';
    }
    if (this.status === 'parttime') {
      teacher.type = 'parttimeteacher';
      this.teacherService.addTeacher(teacher).subscribe((response) => this.teacherComponent.getAllTeachers());
      this.teacher = new TeacherModel();
      this.status = '';
    }
  }
}
