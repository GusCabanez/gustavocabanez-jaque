import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';

import { UsersService } from './services/users.service';
import { ModalComponent } from './modal/modal.component'

@NgModule({
  declarations: [
    UsersComponent, 
    ModalComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ UsersService ],
})
export class UsersModule { }
