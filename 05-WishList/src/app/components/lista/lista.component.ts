import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {DesejosService} from '../../services/desejos.service';
import {Router} from '@angular/router';
import {Lista} from '../../models/lista.model';
import {AlertController, IonList} from '@ionic/angular';

@Component({
    selector: 'app-lista',
    templateUrl: './lista.component.html',
    styleUrls: ['./lista.component.scss'],
})
export class ListaComponent implements OnInit {

    @ViewChild( IonList ) ionList: IonList;
    @Input() terminados = true;

    constructor(private service: DesejosService, private route: Router, private alertCtrl: AlertController) {
    }

    ngOnInit() {
    }

    deseosRout(id: number) {
        if (this.terminados) {
            this.route.navigateByUrl(`/tabs/tab2/agregar/${id}`);
        } else {
            this.route.navigateByUrl(`/tabs/tab1/agregar/${id}`);
        }
    }

    borrarLista(item: Lista) {
        this.service.borrarLista(item);
    }

    async editarLista(item: Lista) {
        const alert = await this.alertCtrl.create({
            header: 'Editar Lista',
            inputs: [
                {
                    name: 'Titulo',
                    type: 'text',
                    value: item.titulo,
                    placeholder: 'Nome da Lista'
                }
            ],
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancelar');
                    }
                },
                {
                    text: 'Atualizar',
                    handler: (data) => {
                        if (data.Titulo.length === 0) {
                            return;
                        }
                        item.titulo = data.Titulo;
                        this.service.guardarStorage();
                    }
                }
            ]
        });
        this.ionList.closeSlidingItems();
        alert.present();
    }
}
