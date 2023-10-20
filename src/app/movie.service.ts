import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class MovieService {
  httpClient = inject(HttpClient);
  getMovies() {
    return this.httpClient.get(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=60dc43618699f4f489728cb8b5831736"
    );
  }
}
