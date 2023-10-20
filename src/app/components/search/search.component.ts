import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-search",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"],
})
export class SearchComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  searchForm = new FormGroup({
    'movieName': new FormControl(null),
  });
}
// submitForm()
// {
//   console.log(this.searchForm.value,"searchform#");
// }
