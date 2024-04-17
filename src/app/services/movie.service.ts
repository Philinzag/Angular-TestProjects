import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovieDetail } from '../interfaces/movie-detail';

const apiURL = environment.apiURL;
const apiKey = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private http =inject(HttpClient);

  constructor() { }

getMovies():Observable<MovieDetail>{
  return this.http.get<MovieDetail>(`${apiURL}?api_key=${apiKey}`);
}

}
