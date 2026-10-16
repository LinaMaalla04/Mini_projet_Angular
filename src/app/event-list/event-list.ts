import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EVENTS, EventItem } from '../event.model';
import { EventCard } from '../event-card/event-card';

@Component({
  selector: 'app-event-list',
  imports: [EventCard, FormsModule],
  templateUrl: './event-list.html',
  styleUrl: './event-list.css',
})
export class EventList {
  readonly events = signal<EventItem[]>(EVENTS);
  readonly favorites = signal<number[]>([]);
  readonly favoritesCount = computed(() => this.favorites().length);
  readonly selectedCategory = signal<string>('Tous');
  readonly search = signal<string>('');

  readonly categories = computed(() => [
    'Tous',
    ...new Set(this.events().map((e) => e.category)),
  ]);

  readonly filteredEvents = computed(() => {
    const category = this.selectedCategory();
    const term = this.search().trim().toLowerCase();
    return this.events().filter(
      (e) =>
        (category === 'Tous' || e.category === category) &&
        (term === '' || e.title.toLowerCase().includes(term)),
    );
  });

  isFavorite(id: number): boolean {
    return this.favorites().includes(id);
  }

  toggleFavorite(id: number): void {
    this.favorites.update((list) =>
      list.includes(id) ? list.filter((fav) => fav !== id) : [...list, id],
    );
  }
}
