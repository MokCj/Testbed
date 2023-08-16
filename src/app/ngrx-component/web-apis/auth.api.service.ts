import {Observable} from "rxjs";
import {AuthRequest, AuthResponse} from "../model/auth.model";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  public sendRequest(request: AuthRequest): Observable<AuthResponse> {
    return new Observable((observer) => {
      setTimeout(() => {
        const responseData = {
          id: 1,
          name: request.userName,
          type: 'TestType'
        }
        const response = new AuthResponse(responseData.id, responseData.name, responseData.type)
        observer.next(response)
        observer.complete()
      }, 1000);
    })
  }
}
