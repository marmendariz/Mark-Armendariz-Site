import { Component, OnInit, Input} from '@angular/core';
import {Hero} from '../heroes/Hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {


  @Input() hero: Hero; //Input property because it will come from another element

  constructor() { }

  ngOnInit() {
  }

}
