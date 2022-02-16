import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {SectorModel} from "./sector.model";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {TeacherModel} from "../teacher/teacher.model";

@Injectable({
  providedIn: "root"
})
export class SectorService {
  constructor(private http: HttpClient) { }

  public updateSector(sector: SectorModel) : Observable<SectorModel> {
    return this.http.put<SectorModel>(`${environment.apiBaseUrl}/api/sector/update`, sector);
  }

  public getSectorByCode(code: string) : Observable<SectorModel> {
    return this.http.get<SectorModel>(`${environment.apiBaseUrl}/api/sector/find/` + code);
  }

}
