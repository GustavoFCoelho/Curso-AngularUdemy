import { Component } from '@angular/core';

@Component({
    selector:"app-body",
    templateUrl: "./body.component.html"
})
export class BodyComponent{

    mostrar:boolean = false;

    frase: any = {
        mensage: "Com grandes poderes vem grandes responsalidades",
        autor: "Ben Parker"
    }

    personagens: string[] = ['Spidermen', 'Venom', 'Dr.Octopus']

}