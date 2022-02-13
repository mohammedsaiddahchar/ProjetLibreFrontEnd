import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {SectorModel} from "./sector.model";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class SectorService {
  constructor(private http: HttpClient) { }

  public updateSector(sector: SectorModel) : void {
    this.http.post<SectorModel>(`${environment.apiBaseUrl}/api/sector/update`, sector).subscribe();
  }

}
