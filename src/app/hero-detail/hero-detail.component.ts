import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router'; //The ActivatedRoute holds information about the route to this instance of the HeroDetailComponent. This component is interested in the route's bag of parameters extracted from the URL. The "id" parameter is the id of the hero to display.
import { Location } from '@angular/common'; //The location is an Angular service for interacting with the browser. You'll use it later to navigate back to the view that navigated here.
import { HeroService }  from '../hero.service'; //The HeroService gets hero data from the remote server and this component will use it to get the hero-to-display.

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;
  constructor(private route: ActivatedRoute,
  private heroService: HeroService,
  private location: Location) { }

  ngOnInit(): void {
    this.getHero();
  }

  //Extract the id route parameter
  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    //The route.snapshot is a static image of the route information shortly after the component was created.
    //The paramMap is a dictionary of route parameter values extracted from the URL. The "id" key returns the id of the hero to fetch.
    //Route parameters are always strings. The JavaScript (+) operator converts the string to a number, which is what a hero id should be.
    this.heroService.getHero(id)
    .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

}
