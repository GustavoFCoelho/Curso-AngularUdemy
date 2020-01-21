import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'capitalizado' })
export class CapitalizadoPipe implements PipeTransform {
    transform(value: string, capitalizado: boolean = true): string {
        value = value.toLowerCase();
        let nomes = value.split(" ");

        if (capitalizado) {
            for (let i in nomes) {
                nomes[i] = nomes[i][0].toUpperCase() + nomes[i].substr(1);
            }
        } else {
            nomes[0] = nomes[0][0].toUpperCase() + nomes[0].substr(1); 
        }


        return nomes.join(" ");
    }
}