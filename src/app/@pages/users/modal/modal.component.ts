import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
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

  @ViewChild('close', { static: false}) modal: ModalComponent;

  profileForm = this.fb.group({
    nombre: ['', Validators.required],
    apellidoPaterno: ['', Validators.required],
    apellidoMaterno: ['', Validators.required],
    email: ['', Validators.compose([Validators.required, Validators.email])],
    role: ['Dueño'],
    active: [false],
  });

  constructor( private fb: FormBuilder, private usersService : UsersService, private renderer: Renderer2 ) {}

  ngOnInit(): void {
    this.usersService.getRoles().subscribe(data => {
      this.roles = data.roles;
    });
  }

  onSubmit(): void {
    console.log('onSubmit is here');
  }

  onClose(): void {
    console.log('Cancel form submission');
  }

}
