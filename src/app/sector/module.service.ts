import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {SectorModel} from "./sector.model";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {ModuleModel} from "./module.model";

@Injectable({
  providedIn:'root'
})
export class ModuleService {
  constructor(private http: HttpClient) { }

  public addModule(module: ModuleModel) : Observable<ModuleModel> {
    return this.http.post<ModuleModel>(`${environment.apiBaseUrl}/api/module/add`, module);
  }

  public updateModule(module: ModuleModel) : Observable<ModuleModel> {
    return this.http.put<ModuleModel>(`${environment.apiBaseUrl}/api/module/update`, module);
  }

}
