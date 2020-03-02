import { Mensagem } from './../interface/mensagem.interface';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";
@Injectable({
    providedIn: 'root'
})
export class ChatService {

    private itemCollection: AngularFirestoreCollection<Mensagem>;
    public chats: Mensagem[] = []

    constructor(private afs: AngularFirestore) { }

    carregarMensagem() {
        this.itemCollection = this.afs.collection<Mensagem>("chats", ref => ref.orderBy('fecha', 'desc').limit(5));
        return this.itemCollection.valueChanges().pipe(map(mensagens => {
            this.chats = mensagens
            this.chats.reverse();
        }));
    }

    agregarMensagem(text: string) {
        let mensagem: Mensagem = {
            mensagem: text,
            nome: "Gustavo",
            fecha: new Date().getTime()
        }

        return this.itemCollection.add(mensagem)
    }
}
