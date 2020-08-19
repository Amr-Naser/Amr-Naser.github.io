import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(public _HttpClient:HttpClient) { }
  getTrendingMovies():Observable<any>{
   return this._HttpClient.get("https://api.themoviedb.org/3/trending/movie/week?api_key=66bd56d75b3a91d8b753e6d45d3983e5")
  }
  getTrendingTv():Observable<any>{
    return this._HttpClient.get("https://api.themoviedb.org/3/trending/tv/week?api_key=66bd56d75b3a91d8b753e6d45d3983e5")
   }
   getMovieDetails(id):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=66bd56d75b3a91d8b753e6d45d3983e5&language=en-US`)
   }
}
