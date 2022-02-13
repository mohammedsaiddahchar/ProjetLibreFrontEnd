import {ModuleModel} from "./module.model";
import {TeacherModel} from "../teacher/teacher.model";

export class SectorModel {
  id!: number;
  code: string = '';
  designation: string = '';
  listModule!: ModuleModel[];
  sectorManager!: TeacherModel;

}
