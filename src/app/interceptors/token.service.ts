import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TokenService implements HttpInterceptor {
  reqClone
  idUser:string = ''
  constructor() {
    this.idUser = localStorage.getItem('id') || ''
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{



    if(req.url.includes("https://api-futbol.herokuapp.com/api/") || req.url.includes("http://localhost:3000/api/")){

      let headers = new HttpHeaders()
      .append('Authorization', this.idUser)

      this.reqClone = req.clone({
        headers,
      })

      console.log(this.reqClone)

    }else{

      let headers = new HttpHeaders()
      .append('X-Auth-Token', environment.tokenFotbal)
      this.reqClone = req.clone({
          headers,
      })

    }


    return next.handle(this.reqClone)
  }

}
