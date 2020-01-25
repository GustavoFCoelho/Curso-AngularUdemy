import { Component } from '@angular/core';
import { DesejosService } from 'src/app/services/desejos.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-tab1',
	templateUrl: 'tab1.page.html',
	styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

	constructor(public service: DesejosService, private route: Router) { }

	agregarLista(){
		this.route.navigateByUrl("/tabs/tab1/agregar")
	}
}
