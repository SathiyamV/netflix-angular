import { Component, EventEmitter, Input, Output } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-card",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
})
export class CardComponent {
  @Input() title = "";
  @Input() movieId: number | null = null;
  @Input() imageSource!: string;
  @Input() description = "";
  @Output() viewMovie = new EventEmitter();
}
