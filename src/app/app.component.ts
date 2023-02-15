import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { HeroService } from './hero.service';

import { HeroInfoDialogComponent } from './hero-info-dialog/hero-info-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  heroes: Array<any> = [];
  searchByName = new FormControl('');
  searchById = new FormControl('');

  constructor(private heroService: HeroService, public dialog: MatDialog) {}

  openDialog(hero: any) {
    const dialogRef = this.dialog.open(HeroInfoDialogComponent, {
      data: hero
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

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
