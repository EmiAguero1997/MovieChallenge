import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppserviceService {

  url:string = 'https://api.themoviedb.org/3/';
  token:string = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0N2FjOTlkMDQ1MjY1ZDZiODQzZWU3ZTQxN2Y0ODE4ZiIsInN1YiI6IjYyMTUyOTBmMzIzZWJhMDAxZWI3Njc1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.05CExT0KbAC1DiBGzAmqFW_CrYVgk4EY-HVfpsl7v6w'
  var:string = 'https://developers.themoviedb.org/3/movies/get-now-playing'
  constructor(private _http: HttpClient) { }

  getMovies():Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization');
  }
}
