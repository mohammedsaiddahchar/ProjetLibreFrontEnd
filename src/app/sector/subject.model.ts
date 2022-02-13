import {TeacherModel} from "../teacher/teacher.model";

export class SubjectModel {
  id!: number;
  designation: string = '';
  teacher!: TeacherModel;
}
