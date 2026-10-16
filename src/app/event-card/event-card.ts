import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EventItem } from '../event.model';

@Component({
  selector: 'app-event-card',
  imports: [DatePipe, CurrencyPipe, UpperCasePipe, RouterLink],
  templateUrl: './event-card.html',
  styleUrl: './event-card.css',
})
export class EventCard {
  readonly event = input.required<EventItem>();
  readonly isFavorite = input<boolean>(false);
  readonly favoriteToggled = output<number>();

  onFavoriteClick(): void {
    this.favoriteToggled.emit(this.event().id);
  }
}
