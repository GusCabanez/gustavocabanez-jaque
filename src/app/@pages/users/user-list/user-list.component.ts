import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { User, Role } from '../users.model';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  localUsers : User[];
  roles: Role[];

  constructor( private usersService : UsersService ) { }

  ngOnInit(){
    this.usersService.getUsers().subscribe(data => {
      this.users = data.users;
      this.localUsers = data.users;
      console.log('Local users', this.users);
    });
    this.usersService.getRoles().subscribe(data => {
      this.roles = data.roles;
      console.log('Local roles', this.roles);
    });
  }

  onEdit(user: any): void {
    console.log('Edit button');
  }

  onDelete(user: any): void {
    let index = this.users.indexOf(user);
    if (index > -1) {
      this.users.splice(index, 1);
    }
  }

  onSearch(value: any): void {
    if (value !== ''){
      console.log(this.users.filter(item => value == item.name));
    } else {
      this.users = this.localUsers;
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.users, event.previousIndex, event.currentIndex);
  }
}
