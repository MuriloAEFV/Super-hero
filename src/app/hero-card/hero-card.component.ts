import { Component, Input } from '@angular/core';

@Component({
  selector: 'hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css']
})
export class HeroCardComponent {
  @Input() heroName: string = '';
  @Input() heroImage: string = '';
}
