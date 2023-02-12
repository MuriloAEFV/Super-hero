import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  heroes: Array<any> = [];
  searchByName = new FormControl('');
  searchById = new FormControl('');

  constructor(private heroService: HeroService) {}

  searchHeroByName(): void {
    if (this.searchByName.value) {
      const name = this.searchByName.value.replaceAll(' ', '').toLowerCase();
      this.getByName(name);
    }
  }

  searchHeroById(): void {
    if (this.searchById.value) {
      const id = this.searchById.value;
      this.getById(id);
    }
  }

  private getByName(name: string): void {
    this.heroService.getHeroesByName(name).subscribe((response) => {
      if (response.results) {
        this.heroes = response.results;
      } else {
        this.heroes = response;
      }
    });
  }

  private getById(id: string): void {
    this.heroService.getHeroesById(id).subscribe((response) => {
      this.heroes = [response];
    });
  }
}
