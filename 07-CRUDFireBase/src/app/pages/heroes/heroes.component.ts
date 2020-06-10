import {Component, OnInit} from '@angular/core';
import {HeroService} from "../../service/hero.service";
import {Hero} from "../../model/hero";
import Swal from "sweetalert2";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  carregando = false;

  constructor(private service: HeroService) {
  }

  ngOnInit() {
    this.carregando = true;
    this.service.getHeros().subscribe((result) => {
      this.heroes = result;
      this.carregando = false;
    })
  }

  thanos(id: string, i: number) {
    Swal.fire({
      title: "Deseja Excluir?",
      showConfirmButton: true,
      showCancelButton: true
    }).then(resp => {
      if (resp.value) {
        this.service.blip(id).subscribe((result) => {
          console.log(result);
          this.heroes.splice(i, 1);
        });
      }
    });

  }

}
