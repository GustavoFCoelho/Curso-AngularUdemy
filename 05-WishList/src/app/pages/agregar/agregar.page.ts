import {Component, OnInit} from '@angular/core';
import {DesejosService} from 'src/app/services/desejos.service';
import {ActivatedRoute} from '@angular/router';
import {Lista} from 'src/app/models/lista.model';
import {ListaItem} from 'src/app/models/lista-item.model';

@Component({
    selector: 'app-agregar',
    templateUrl: './agregar.page.html',
    styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

    lista: Lista;
    nomeItem: string;

    constructor(private service: DesejosService, private route: ActivatedRoute) {
        const listaId = this.route.snapshot.paramMap.get('listaId');
        this.lista = this.service.obterLista(listaId);

    }

    ngOnInit() {
    }

    novoItem() {
        if (this.nomeItem.length === 0) {
            return;
        }

        const novoItem = new ListaItem(this.nomeItem);
        this.lista.items.push(novoItem);
        this.nomeItem = '';
        this.service.guardarStorage();
    }

    salvarChecked() {
        const pendentes = this.lista.items.filter(itemData => !itemData.status).length;
        if (pendentes === 0) {
            this.lista.dataTermino = new Date();
            this.lista.status = true;
        } else {
            this.lista.dataTermino = null;
            this.lista.status = false;
        }

        console.log(pendentes);
        this.service.guardarStorage();
    }

    borrar(i: number) {
      this.lista.items.splice(i, 1);
      this.service.guardarStorage();
    }
}
