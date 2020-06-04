import {Injectable} from '@angular/core';
import {Lista} from '../models/lista.model';

@Injectable({
    providedIn: 'root'
})
export class DesejosService {

    listas: Lista[];

    constructor() {
        this.carregarStorage();
        if (this.listas === null) {
            this.listas = [];
        }
    }

    criarLista(Titulo: string) {
        const novaLista = new Lista(Titulo);
        this.listas.push(novaLista);
        this.guardarStorage();
        return novaLista.id;
    }

    obterLista(id: string | number) {
        id = Number(id);
        return this.listas.find(listaData => {
            return listaData.id === id;
        });
    }

    guardarStorage() {
        localStorage.setItem('Lista', JSON.stringify(this.listas));
    }

    carregarStorage() {
        this.listas = JSON.parse(localStorage.getItem('Lista'));
    }

    borrarLista(lista: Lista) {
        this.listas = this.listas.filter(listaData => {
            return listaData.id !== lista.id;
        });

        this.guardarStorage();
    }
}
