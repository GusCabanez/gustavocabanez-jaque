import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms'
import { User, Role } from '../users.model';

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

  constructor( private fb: FormBuilder) {}

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log('onSubmit is here');
  }

  onClose(): void {
    console.log('Cancel form submission');
  }

}
