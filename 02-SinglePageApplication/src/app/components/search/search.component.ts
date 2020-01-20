import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';
import { Hero } from 'src/app/models/hero.interface';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {
    constructor(private service:HeroesService, private activateRoute:ActivatedRoute) { }

    heroes:Hero[];
    busca:string;

    ngOnInit(): void { 
        this.activateRoute.params.subscribe((result)=>{
            this.busca = result['contem']
            this.heroes = this.service.buscarHeroes(this.busca);
        })
    }
}
