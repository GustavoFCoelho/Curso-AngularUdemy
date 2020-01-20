import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { Hero } from 'src/app/models/hero.interface';
import { Router } from '@angular/router';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {

    heroes:Hero[] = []

    constructor(private heroesService: HeroesService,private route:Router) {}

    ngOnInit() {
        this.heroes = this.heroesService.getHereos();
        console.log(this.heroes)
    }
    verHero(index: number){
        this.route.navigate([`/hero/${index}`])
    }

}
