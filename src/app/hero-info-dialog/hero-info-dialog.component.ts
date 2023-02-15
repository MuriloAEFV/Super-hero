import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'hero-info-dialog',
  templateUrl: './hero-info-dialog.component.html',
  styleUrls: ['./hero-info-dialog.component.css'],
})
export class HeroInfoDialogComponent {

  heroData: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    if (data) {
      this.heroData = data;
    }
  }

}
