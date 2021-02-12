import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {Injectable} from '@angular/core';
import {tap} from 'rxjs/operators';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = window.localStorage.getItem('token');
    console.log('interceptor', token);
    if (token) {
      req = req.clone({
        setHeaders: {
          Authorization: 'Bearer ' + token
        }
      });
    }
    return next.handle(req);
    // .pipe(
      // tap(
      //   event => {
      //     window.localStorage.setItem('token', token);
      //     console.log('api call start : ', event);
      //     if (event instanceof HttpResponse) {
      //       console.log('api call success : ', event);
      //     }
      //   },
      //   error => {
      //     if (event instanceof HttpResponse) {
      //       console.log('api call error : ', event);
      //     }
      //   }
      // )
    // );
  }
}
