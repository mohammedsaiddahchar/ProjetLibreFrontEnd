import {Component, OnInit} from "@angular/core";
import {TeacherService} from "./teacher.service";
import {TeacherModel} from "./teacher.model";

@Component({
  selector: 'app-teacher',
  templateUrl: 'teacher.component.html',
  styleUrls: ['teacher.component.css']
})
export class TeacherComponent implements OnInit {
  public teachers: TeacherModel[] = [];
  constructor(private teacherService: TeacherService) { }

  ngOnInit() {
    this.getAllTeachers();
  }

  public getAllTeachers() : void {
    this.teacherService.getAllTeachers().subscribe((response)=> this.teachers = response);
  }

  public openModal(mode: string) : void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');

    if (mode === 'add') {
      button.setAttribute('data-bs-target', '#addTeacherModal');
    }
    if (container) {
      container.appendChild(button);
    }
    button.click();
  }

}
