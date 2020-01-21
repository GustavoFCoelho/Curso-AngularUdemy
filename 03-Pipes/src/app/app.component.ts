import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Pipes';
    nome:string = "Gustavo"
    nome2="gustavo de freitas coelho"
    array=[1,2,3,4,5,6,7,8,9,10]
    PI= Math.PI;
    a=0.216;
    salario=4344.55
    ativar = true;
    hero={
        nombre:"LOGAN",
        clave:"Wolverine",
        age:500,
        direccion:{
            calle:"Primeria",
            casa:"19"
        }
    }

    valorDePromessa = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("Chegou os dados")
        }, 3500);
    })

    data = new Date()
}
