import { Injectable } from '@angular/core';
import { User, Role }  from '../users.model';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  private users: User[] = [];
  private roles: Role[] = [];
  private newUser : User;

  constructor( private http: HttpClient) {
    this.getUsers().subscribe(data => console.log('From service: ', data));
    this.getUsers().subscribe(data => console.log(data.users.concat(this.newUser)));
  }

  public getUsers(): Observable<any> {
    return this.http.get('./assets/users.json');
  }

  public getRoles(): Observable<any> {
    return this.http.get('./assets/roles.json');
  }

  public createUser(user? : any): Observable<any>{
    return of(user);
  }
}