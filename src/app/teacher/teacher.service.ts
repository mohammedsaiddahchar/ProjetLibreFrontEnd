import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TeacherModel} from "./teacher.model";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private http: HttpClient) { }

  public getAllTeachers() : Observable<TeacherModel[]> {
    return this.http.get<TeacherModel[]>(`${environment.apiBaseUrl}/api/teacher/all`);
  }

  public addFullTimeTeacher(teacher: TeacherModel) : Observable<TeacherModel> {
    return this.http.post<TeacherModel>(`${environment.apiBaseUrl}/api/fulltimeteacher/add`, teacher);
  }

  public addPartTimeTeacher(teacher: TeacherModel) : Observable<TeacherModel> {
    return this.http.post<TeacherModel>(`${environment.apiBaseUrl}/api/parttimeteacher/add`, teacher);
  }
}
