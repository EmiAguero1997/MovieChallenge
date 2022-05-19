import { Component, OnInit } from '@angular/core';
import { AppserviceService } from './services/appservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MovieChallenge';
  movies: Array<any>=[];
  constructor(private _appService:AppserviceService){
    
  }

  ngOnInit(): void {
    this.getMovies();
    
  }

  getMovies(){
    this._appService.getMovies().subscribe(
      response=>{
        for(let i=0; i<4;i++){
          this.movies.push(response.results[i]);
        }
        console.log('Movies: ',this.movies);
      },
      error=>{
        console.log(error);
      }
    );
  }
}
