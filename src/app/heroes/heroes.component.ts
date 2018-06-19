import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  //hero1 = "Windstorm";
  //heroes = HEROES;
  heroes: Hero[];

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
    //This new version waits for the Observable to emit the array of heroes— which could happen now or several minutes from now. Then subscribe passes the emitted array to the callback, which sets the component's heroes property.
  //  this.heroes = this.heroService.getHeroes(); //The previous version assigns an array of heroes to the component's heroes property.
  }

  /*selectedHero: Hero;
  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }*/ //This is no longer required as the onSelect method was replaced by the dashboard.
  /*hero: Hero = {
    id: 1,
    name: 'Henry'

  }*/

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

}
