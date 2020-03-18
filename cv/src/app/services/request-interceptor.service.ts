import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestInterceptorService implements HttpInterceptor {
  


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("INTERCEPTOR");
    req=req.clone({
      setParams:{
        'key':'8b44296e1a1f8b33515bb79143',
        'filters':'author:ghost',
        'limit':'3'
      }
    });

    return next.handle(req);
  }
}
