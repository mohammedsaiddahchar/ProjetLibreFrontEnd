import {SubjectModel} from "./subject.model";
import {TeacherModel} from "../teacher/teacher.model";

export class ModuleModel {
  id!: number;
  code: string = '';
  designation: string = '';
  level!: number;
  listSubject!: SubjectModel[];
  moduleManager!: TeacherModel;
}
