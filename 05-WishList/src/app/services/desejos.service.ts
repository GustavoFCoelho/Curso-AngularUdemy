import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
    providedIn: 'root'
})
export class DesejosService {

    listas: Lista[] = []

    constructor() { 
        this.listas.push(new Lista("Assistir as longas tranças d um careca!"))
    }
}
