import { Component } from '@angular/core';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  heroes: any;

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.heroService.getHero().subscribe((response) => {
      this.heroes = response.results;
    });
  }
}
