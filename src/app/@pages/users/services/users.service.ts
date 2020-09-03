import { Injectable } from '@angular/core';
import { User, Role }  from '../users.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  private users: User[];
  private roles: Role[];

  constructor( private http: HttpClient) {
    this.getUsers().subscribe(data => console.log('From service: ', data));
  }

  public getUsers(): Observable<any> {
    return this.http.get('./assets/users.json');
  }
}