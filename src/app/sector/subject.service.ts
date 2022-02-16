import {Injectable} from "@angular/core";
import {ModuleModel} from "./module.model";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {SubjectModel} from "./subject.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http: HttpClient) { }

  public findSubject(id: number) : Observable<SubjectModel> {
    return this.http.get<SubjectModel>(`${environment.apiBaseUrl}/api/subject/find` + id);
  }
}
