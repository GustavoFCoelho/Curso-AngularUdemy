import {Component, OnInit} from '@angular/core';
import {Hero} from "../../model/hero";
import {NgForm} from "@angular/forms";
import {HeroService} from "../../service/hero.service";
import Swal from "sweetalert2";
import {Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss']
})
export class HeroeComponent implements OnInit {

  hero: Hero = new Hero();

  constructor(private service: HeroService, private router:ActivatedRoute) {
  }

  ngOnInit() {
    const id = this.router.snapshot.paramMap.get("id");
    if(id !== "nuevo"){
      this.service.getHero(id).subscribe((result:Hero)=>{
        this.hero = result;
        this.hero.id = id;
      })
    }
  }

  guardar(f: NgForm) {
    if (f.invalid) {
      alert("Formulario não valido");
      return;
    }
    Swal.fire({
      title: "Aguarde",
      text: "Salvando a Informação",
      allowOutsideClick: false,
    });
    Swal.showLoading();

    let peticao: Observable<any>;
    if (this.hero.id) {
      peticao = this.service.atualizarHero(this.hero);
    } else {
      peticao = this.service.criarHero(this.hero)
    }

    peticao.subscribe((result:any)=>{
      Swal.fire({
        title: this.hero.nombre,
        text: "Foi salvo com sucesso",
      })
    })
  }
}
