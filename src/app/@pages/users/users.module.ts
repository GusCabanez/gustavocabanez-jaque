import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'
import { UsersRoutingModule } from './users-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop'

import { UsersService } from './services/users.service';

import { UsersComponent } from './users.component';
import { ModalComponent } from './modal/modal.component'
import { UserListComponent } from './user-list/user-list.component';


@NgModule({
  declarations: [
    UsersComponent, 
    ModalComponent, UserListComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DragDropModule
  ],
  providers: [ UsersService ],
})
export class UsersModule { }
