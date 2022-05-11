import { Component, OnInit, Input } from '@angular/core';
import { MovieElem } from '../recent/recent.component';
import { WatchMovieService } from '../watch-movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.css']
})
export class ThumbnailComponent implements OnInit {

  @Input() movie: MovieElem = {id:0, name:"", url:"", year:0};

  watchMovieservice: WatchMovieService;
  router: Router;

  constructor(watchMovieService : WatchMovieService, router: Router) {
    this.watchMovieservice = watchMovieService;
    this.router = router;
  }

  ngOnInit(): void {
  }

  send(): void {
    console.log("calling watchMovieService.sendData with movie = "+this.movie.name);
    this.watchMovieservice.sendData(this.movie);
    this.router.navigate(["/watching"]);
  }

}
