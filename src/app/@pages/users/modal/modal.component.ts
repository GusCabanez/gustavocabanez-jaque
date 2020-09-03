import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms'
import { UsersService } from '../services/users.service';
import { User, Role } from '../users.model';
import { roles } from '../../../shared/roles'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  users: User[]; 
  roles = [{'id':1, 'position': 'Dueño'},{'id':2, 'position': 'Administrador'},{'id':3, 'position': 'Staff'}]; 

  profileForm = this.fb.group({
    nombre: ['', Validators.required],
    apellidoPaterno: ['', Validators.required],
    apellidoMaterno: ['', Validators.required],
    email: ['', Validators.compose([Validators.required, Validators.email])],
    role: ['Dueño'],
    active: [false],
  });

  constructor( private usersService : UsersService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.users = this.usersService.getUsers();
  }

  onSubmit(): void {
    console.log('onSubmit is here');
  }

  onClose(): void {
    console.log('Cancel form submission');
  }

}
