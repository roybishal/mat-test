import { Injectable } from '@angular/core';
import { MovieElem } from './recent/recent.component';

@Injectable({
  providedIn: 'root'
})
export class WatchMovieService {

  constructor() { }
  movie: MovieElem={id:0, name:"", url:"", year:0};
  sendData(movie: MovieElem){
    console.log('save data function called' + movie.name + this.movie.name);
    this.movie=movie; 
  }
  getData(): MovieElem{
    console.log('get data function called');
    return this.movie;
  }
}
