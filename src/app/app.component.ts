import {Component, OnInit} from '@angular/core';
import {UserModel} from "./user.model";
import {UserService} from "./user.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public users: UserModel[] = [];
  title: string = 'my title';
  sectorsActive: boolean = false;
  homeActive: boolean = true;
  teachersActive: boolean = false;

  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers() : void {
    this.userService.getUsers().subscribe(
      (response : UserModel[]) => {
        this.users = response;
      },
      (error : HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public openModal(user: UserModel, mode: string) : void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');

    if (mode === 'add') {
      button.setAttribute('data-bs-target', '#addUserModal');
    }
    if (container) {
      container.appendChild(button);
    }
    button.click();
  }
}
