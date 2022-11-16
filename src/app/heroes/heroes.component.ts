import { Component } from '@angular/core';
import { Hero } from '../models/heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent {
  public hero: Hero = { id: 0, name: 'Nicao' };
  constructor() {}
}
