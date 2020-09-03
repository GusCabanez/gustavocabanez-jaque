import { Component, OnInit, Renderer2, ViewChild, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms'
import { User, Role } from '../users.model';
import { UsersService } from '../services/users.service'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  users: User[]; 
  roles: Role[];
  newUser: User;

  @Output() isVisible = new EventEmitter<boolean>();

  profileForm = this.fb.group({
    //foto: ['', Validators.required],
    name: ['', Validators.required],
    fathersLastName: ['', Validators.required],
    mothersLastName: ['', Validators.required],
    email: ['', Validators.compose([Validators.required, Validators.email])],
    roleId: [1],
    active: [false],
  });

  constructor( private fb: FormBuilder, private usersService : UsersService, private renderer: Renderer2 ) {}

  ngOnInit(): void {
    this.usersService.getRoles().subscribe(data => {
      this.roles = data.roles;
    });
  }

  onSubmit(): void {
    this.usersService.createUser(this.profileForm.value).subscribe(data => console.log(data));
  }

  closeModal(): void {
    this.isVisible.emit(false);
  }

}
