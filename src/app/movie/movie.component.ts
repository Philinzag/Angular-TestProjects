import { Component , inject, OnInit} from '@angular/core';
import { MovieService } from '../services/movie.service';
import { MovieDetail } from '../interfaces/movie-detail';
import { environment } from '../../environments/environment';

const imgURL = environment.imgURL;
@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})

export class MovieComponent implements OnInit {
  private movieService = inject(MovieService)

  //movies : any =[];
  movies: MovieDetail[] = [];
  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies(){
    this.movieService.getMovies().subscribe({
      next : (res:any)=>{
        this.movies = res.results as MovieDetail[];
        console.log(res.results);
    },
    error:(error)=>console.log('Error while fetching data',error)
    });
  }

  getfullimageURL(poster_path:string) : String{
    return imgURL + poster_path;
  }
}
