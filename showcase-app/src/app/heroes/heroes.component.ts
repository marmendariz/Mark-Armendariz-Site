import { Component, OnInit } from '@angular/core';
import {Hero} from './Hero';
import {HEROES} from '../demo-heroes';

@Component({
  selector: 'app-heroes', /* Component's CSS element selector */
  templateUrl: './heroes.component.html', /** The location of the component's template file */
  styleUrls: ['./heroes.component.css'] /** The location of the component's private CSS styles */
})
export class HeroesComponent implements OnInit {

  /*hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };*/

  heroes = HEROES;
  
  //sets it to type Hero
  selectedHero: Hero;

  constructor() { }

  //hero = 'Windstorm';

  //This is called after creating a component. Can initialize logic here
  ngOnInit() {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
