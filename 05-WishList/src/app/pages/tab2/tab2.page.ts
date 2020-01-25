import { Component } from '@angular/core';
import { DesejosService } from 'src/app/services/desejos.service';

@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

    constructor(public service: DesejosService) { }

}
