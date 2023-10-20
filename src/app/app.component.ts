import { Component, OnInit, inject } from "@angular/core";
import { HeaderComponent } from "./components/header/header.component";
import { CardComponent } from "./components/card/card.component";
import { NgFor } from "@angular/common";
import { MovieService } from "./movie.service";
import { SearchComponent } from "./components/search/search.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: "app-root",
  standalone: true,
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  imports: [
    HeaderComponent,
    CardComponent,
    NgFor,
    SearchComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.movieService.getMovies().subscribe((movieresponse) => {
      console.log(movieresponse);
      this.movies = movieresponse;
    });
  }
  title = "netflix";
  movies: any;
  movieService = inject(MovieService);
  consoleMovieId(a: unknown) {}
}
