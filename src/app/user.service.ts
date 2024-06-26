import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { User } from '../User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}


  login(username: string, password: string): Observable<any> {
    const loginInfo = { username, password };
    console.log(loginInfo.username);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post<User>(`http://localhost:5056/api/Users/login`, loginInfo, { headers })
      .pipe(
        catchError(this.handleError)
      );
    }

  Register(username: string, password: string): Observable<User> {
    const loginInfo = { username, password };
    console.log(loginInfo.username);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post<User>(`http://localhost:5056/api/Users`, loginInfo, { headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  addDeckToUser(Id:number,name:string):any {
    

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    
   this.http.put<User>(`http://localhost:5056/api/Users/` + Id, name, { headers })
      .pipe(
        catchError(this.handleError),
          );
    
      
  }

  setUpdateWork(update:boolean){
    update = !update;
  }

  updateUser(Id:number,user:User):boolean {
    if(user == null){
      return false;
    }
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

   this.http.put<User>(`http://localhost:5056/api/Users/` + Id,  { headers })
      .pipe(
        catchError(this.handleError),
          );
      return true;

  }

  
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      // Client-side or network error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Backend error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
