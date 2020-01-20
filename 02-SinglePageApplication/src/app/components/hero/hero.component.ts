import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from 'src/app/models/hero.interface';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
    selector: 'app-hero',
    templateUrl: './hero.component.html',
})
export class HeroComponent implements OnInit {

    hero:Hero

    constructor(private service:HeroesService, private activateRoute: ActivatedRoute) { 
        this.activateRoute.params.subscribe((params)=>{
            this.hero = service.getHero(params['id']);
            console.log(this.hero)
        })
    }

    ngOnInit(): void { }

    
}
