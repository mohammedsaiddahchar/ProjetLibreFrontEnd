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

  public getAllFullTimeTeachers() : Observable<TeacherModel[]> {
    return this.http.get<TeacherModel[]>(`${environment.apiBaseUrl}/api/fulltimeteacher/all`);
  }

  public findTeacherById(id: number) : Observable<TeacherModel> {
    return this.http.get<TeacherModel>(`${environment.apiBaseUrl}/api/teacher/find/` + id);
  }

  public findFullTimeTeacherById(id: number) : Observable<TeacherModel> {
    return this.http.get<TeacherModel>(`${environment.apiBaseUrl}/api/fulltimeteacher/find/` + id);
  }

  public findPartTimeTeacherById(id: number) : Observable<TeacherModel> {
    return this.http.get<TeacherModel>(`${environment.apiBaseUrl}/api/parttimeteacher/find/` + id);
  }

  public addFullTimeTeacher(teacher: TeacherModel) : Observable<TeacherModel> {
    return this.http.post<TeacherModel>(`${environment.apiBaseUrl}/api/fulltimeteacher/add`, teacher);
  }

  public addPartTimeTeacher(teacher: TeacherModel) : Observable<TeacherModel> {
    return this.http.post<TeacherModel>(`${environment.apiBaseUrl}/api/parttimeteacher/add`, teacher);
  }

  public deleteTeacherById(id: number) : Observable<void> {
    return this.http.delete<void>(`${environment.apiBaseUrl}/api/teacher/delete/` + id);
  }

  public addTeacher(teacher: TeacherModel): Observable<TeacherModel> {
    return this.http.post<TeacherModel>(`${environment.apiBaseUrl}/api/teacher/add`, teacher);
  }
}
