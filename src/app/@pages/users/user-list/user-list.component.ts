import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { User } from '../users.model';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor( private usersService : UsersService ) { }

  ngOnInit(){
    this.usersService.getUsers().subscribe(data => {
      this.users = data.users;
      console.log('Local users', this.users);
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

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.users, event.previousIndex, event.currentIndex);
  }
}
