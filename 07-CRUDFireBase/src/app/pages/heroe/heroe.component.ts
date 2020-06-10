import {Component, OnInit} from '@angular/core';
import {Hero} from "../../model/hero";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss']
})
export class HeroeComponent implements OnInit {

  hero: Hero = new Hero();

  constructor() {
  }

  ngOnInit() {
  }

  guardar(f: NgForm) {
    if(f.invalid){
      alert("Formulario não valido")
      return;
    }
    console.log(f);
    console.log(this.hero);
  }
}
