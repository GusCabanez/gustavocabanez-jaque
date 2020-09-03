import { Component, OnInit } from '@angular/core';
import { users } from '../../shared/users';
import { roles } from '../../shared/roles';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
  isVisible = false;

  constructor() { }

  ngOnInit(): void {
  }

}
