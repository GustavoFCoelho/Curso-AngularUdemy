import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'senha'})
export class SenhaPipe implements PipeTransform {
    transform(value: string, ativa:boolean = true): any {
        if(!ativa){
            return value;
        } else {
            let passLength:string = "";
            for(let i = 0; i < value.length; i++){
                passLength += "*";
            }
            return passLength;
        }
    }
}