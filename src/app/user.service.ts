import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {UserModel} from "./user.model";
import {environment} from "../environments/environment";

@Injectable({
  providedIn : 'root'
})
export class UserService {
  private apiServiceUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getUsers() : Observable<UserModel[]> {
    return this.http.get<UserModel[]>(`${this.apiServiceUrl}/api/user/all`);
  }

  public addUser(user: UserModel) : Observable<UserModel> {
    return this.http.post<UserModel>(`${this.apiServiceUrl}/api/user/add`, user);
  }

}
