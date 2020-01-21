import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
	name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

	constructor(private dSan:DomSanitizer){}

	transform(value: string, url:string): any {
		return this.dSan.bypassSecurityTrustResourceUrl(url + value)
	}

}
