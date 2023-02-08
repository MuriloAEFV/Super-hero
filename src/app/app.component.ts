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
  searchInput = new FormControl('');

  constructor(private heroService: HeroService) {}

  searchHero(): void {
    if (this.searchInput.value) {
      const name = this.searchInput.value.replaceAll(' ', '').toLowerCase();
      this.getHeroes(name);
    }
  }

  private getHeroes(name: string): void {
    this.heroService.getHeroes(name).subscribe((response) => {
      this.heroes = response.results;
    });
  }
}
