import {Component} from '@angular/core';
import {DesejosService} from 'src/app/services/desejos.service';
import {Router} from '@angular/router';
import {AlertController} from '@ionic/angular';

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

    constructor(public service: DesejosService, private route: Router, private alertCrtl: AlertController) {
    }

    async agregarLista() {
        const alert = await this.alertCrtl.create({
            header: 'Nova Lista',
            inputs: [
                {
                    name: 'Titulo',
                    type: 'text',
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
                    text: 'Criar',
                    handler: (data) => {
                        if (data.Titulo.length === 0) {
                            return;
                        }
                        const id = this.service.criarLista(data.Titulo);
                        this.route.navigateByUrl(`/tabs/tab1/agregar/${id}`);
                    }
                }
            ]
        });

        alert.present();
    }
}
