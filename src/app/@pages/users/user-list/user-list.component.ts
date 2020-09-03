import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { User } from '../users.model';

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

}
