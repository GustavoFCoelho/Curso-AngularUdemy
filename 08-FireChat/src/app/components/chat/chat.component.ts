import { Mensagem } from './../../interface/mensagem.interface';
import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/providers/chat.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
	selector: 'app-chat',
	templateUrl: './chat.component.html',
	styles: []
})
export class ChatComponent implements OnInit {

	chat: Mensagem[] = []
	mensaje: string = ""
	elemento: any;

	constructor(protected service: ChatService) { }

	ngOnInit(): void {
		this.service.carregarMensagem().subscribe(
			(result) => {
				this.chat = this.service.chats
				setTimeout(() => {
					this.elemento.scrollTop = this.elemento.scrollHeigth
				}, 20);
			}
		)
		this.elemento = document.getElementById("app-mensajes");
	}

	enviarMensagem() {
		if (!this.mensaje) {
			return;
		}

		this.service.agregarMensagem(this.mensaje)
			.then((result) => {
				console.log(result);
				this.mensaje = ""
			})
	}
}
