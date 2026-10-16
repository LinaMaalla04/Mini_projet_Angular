import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EVENTS } from '../event.model';

@Component({
  selector: 'app-event-details',
  imports: [DatePipe, CurrencyPipe, RouterLink],
  templateUrl: './event-details.html',
  styleUrl: './event-details.css',
})
export class EventDetails {
  readonly id = input.required<string>();

  readonly event = computed(() => EVENTS.find((e) => e.id === Number(this.id())));
}
