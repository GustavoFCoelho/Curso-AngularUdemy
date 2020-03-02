import { ListaItem } from './lista-item.model';

export class Lista{
    id: number;
    titulo: string;
    dataCriacao: Date;
    dataTermino: Date;
    status: boolean;
    items: ListaItem[] = [];

    constructor(titulo:string){
        this.titulo = titulo;
        this.dataCriacao = new Date();
        this.status = false;

        this.id = new Date().getTime();
    }
}