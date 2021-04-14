import { Component, OnInit } from '@angular/core';
import { Pedido } from './table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  pedidos: Pedido[]=[]
  public paginaAtual = 1;
  pageIndex:number = 0;
    pageSize:number = 5;
    lowValue:number = 0;
    highValue:number = 5;

    res= {
        "count": 14453,
        "data": [
          { /* item 1 */ },
          { /* item 2 */ },
          { /* item 3 */ },
          { /*   ...  */ },
          { /* item 10 */ }
        ]
      }

  constructor() { }

  

  ngOnInit(): void {
    this.pedidos = 
      [
        {
            "id": 10,
            "data": "2021-04-01 16:53:25",
            "produto": "CPF Básica",
            "valor": "39.98",
            "tipo": "CPF",
            "pagto": "boleto",
            "status": "Em análise"
        },
        {
            "id": 11,
            "data": "2021-04-01 16:54:00",
            "produto": "CPF Básica",
            "valor": "19.99",
            "tipo": "CPF",
            "pagto": "boleto",
            "status": "Em análise"
        },
        {
            "id": 33,
            "data": "2021-04-08 16:46:04",
            "produto": "CPF Básica",
            "valor": "19.99",
            "tipo": "CPF",
            "pagto": "credito",
            "status": "Concluído"
        },
        {
            "id": 34,
            "data": "2021-04-08 16:50:31",
            "produto": "CPF Completa",
            "valor": "19.99",
            "tipo": "CPF",
            "pagto": "credito",
            "status": "Concluído"
        },
        {
            "id": 41,
            "data": "2021-04-09 10:48:13",
            "produto": "CPF Completa",
            "valor": "19.99",
            "tipo": "CPF",
            "pagto": "cartao",
            "status": "Cancelado"
        },
        {
            "id": 42,
            "data": "2021-04-09 10:53:49",
            "produto": "CPF Completa",
            "valor": "19.99",
            "tipo": "CPF",
            "pagto": "credito",
            "status": "Concluído"
        },
        {
            "id": 17,
            "data": "2021-04-08 11:18:46",
            "produto": "Veicular Básica",
            "valor": "11.46",
            "tipo": "Veicular",
            "pagto": "cartao",
            "status": "Concluído"
        },
        {
            "id": 30,
            "data": "2021-04-08 16:23:41",
            "produto": "Veicular Completa",
            "valor": "19.99",
            "tipo": "Veicular",
            "pagto": "boleto",
            "status": "Em análise"
        },
        {
            "id": 43,
            "data": "2021-04-13 09:12:40",
            "produto": "Veicular Completa",
            "valor": "19.99",
            "tipo": "Veicular",
            "pagto": "boleto",
            "status": "Em análise"
        },
        {
            "id": 44,
            "data": "2021-04-13 09:16:26",
            "produto": "Veicular Completa",
            "valor": "19.99",
            "tipo": "Veicular",
            "pagto": "boleto",
            "status": "Concluído"
        },
        {
            "id": 13,
            "data": "2021-04-06 16:40:14",
            "produto": "Pacote Básico",
            "valor": "215.90",
            "tipo": "Credito",
            "pagto": "cartao",
            "status": "Em análise"
        },
        {
            "id": 14,
            "data": "2021-04-06 17:02:45",
            "produto": "Pacote Básico",
            "valor": "215.90",
            "tipo": "Credito",
            "pagto": "cartao",
            "status": "Concluído"
        },
        {
            "id": 15,
            "data": "2021-04-07 16:46:58",
            "produto": "Pacote Básico",
            "valor": "690.89",
            "tipo": "Credito",
            "pagto": "cartao",
            "status": "Concluído"
        },
        {
            "id": 16,
            "data": "2021-04-07 16:53:15",
            "produto": "Pacote Básico",
            "valor": "100.00",
            "tipo": "Credito",
            "pagto": "cartao",
            "status": "Concluído"
        },
        {
            "id": 19,
            "data": "2021-04-08 11:48:34",
            "produto": "Pacote Básico",
            "valor": "100.00",
            "tipo": "Credito",
            "pagto": "cartao",
            "status": "Em análise"
        },
        {
            "id": 20,
            "data": "2021-04-08 13:04:48",
            "produto": "Pacote Básico",
            "valor": "100.00",
            "tipo": "Credito",
            "pagto": "cartao",
            "status": "Concluído"
        },
        {
            "id": 21,
            "data": "2021-04-08 13:12:40",
            "produto": "Pacote Básico",
            "valor": "100.00",
            "tipo": "Credito",
            "pagto": "cartao",
            "status": "Concluído"
        },
        {
            "id": 22,
            "data": "2021-04-08 13:17:19",
            "produto": "Pacote Básico",
            "valor": "100.00",
            "tipo": "Credito",
            "pagto": "cartao",
            "status": "Cancelado"
        },
        {
            "id": 23,
            "data": "2021-04-08 14:24:42",
            "produto": "Pacote Básico",
            "valor": "120.37",
            "tipo": "Credito",
            "pagto": "cartao",
            "status": "Cancelado"
        },
        {
            "id": 24,
            "data": "2021-04-08 14:25:18",
            "produto": "Pacote Básico",
            "valor": "100.00",
            "tipo": "Credito",
            "pagto": "boleto",
            "status": "Concluído"
        },
        {
            "id": 25,
            "data": "2021-04-08 15:03:20",
            "produto": "Pacote Básico",
            "valor": "100.00",
            "tipo": "Credito",
            "pagto": "boleto",
            "status": "Concluído"
        },
        {
            "id": 26,
            "data": "2021-04-08 15:36:46",
            "produto": "Pacote Básico",
            "valor": "100.00",
            "tipo": "Credito",
            "pagto": "cartao",
            "status": "Cancelado"
        },
        {
            "id": 27,
            "data": "2021-04-08 15:37:55",
            "produto": "Pacote Básico",
            "valor": "100.00",
            "tipo": "Credito",
            "pagto": "boleto",
            "status": "Concluído"
        },
        {
            "id": 29,
            "data": "2021-04-08 16:16:17",
            "produto": "Pacote Básico",
            "valor": "900.00",
            "tipo": "Credito",
            "pagto": "boleto",
            "status": "Concluído"
        },
        {
            "id": 31,
            "data": "2021-04-08 16:24:18",
            "produto": "Pacote Básico",
            "valor": "100.00",
            "tipo": "Credito",
            "pagto": "cartao",
            "status": "Concluído"
        },
        {
            "id": 32,
            "data": "2021-04-08 16:28:18",
            "produto": "Pacote Básico",
            "valor": "100.00",
            "tipo": "Credito",
            "pagto": "cartao",
            "status": "Cancelado"
        },
        {
            "id": 35,
            "data": "2021-04-08 16:55:21",
            "produto": "Pacote Básico",
            "valor": "1800.00",
            "tipo": "Credito",
            "pagto": "credito",
            "status": "Concluído"
        },
        {
            "id": 37,
            "data": "2021-04-09 10:41:49",
            "produto": "Pacote Básico",
            "valor": "100.00",
            "tipo": "Credito",
            "pagto": "boleto",
            "status": "Em análise"
        },
        {
            "id": 38,
            "data": "2021-04-09 10:42:29",
            "produto": "Pacote Básico",
            "valor": "100.00",
            "tipo": "Credito",
            "pagto": "cartao",
            "status": "Cancelado"
        },
        {
            "id": 39,
            "data": "2021-04-09 10:44:14",
            "produto": "Pacote Básico",
            "valor": "111.84",
            "tipo": "Credito",
            "pagto": "cartao",
            "status": "Cancelado"
        },
        {
            "id": 40,
            "data": "2021-04-09 10:46:19",
            "produto": "Pacote Básico",
            "valor": "100.00",
            "tipo": "Credito",
            "pagto": "cartao",
            "status": "Cancelado"
        },
        {
            "id": 18,
            "data": "2021-04-08 11:19:38",
            "produto": "Pacote Super",
            "valor": "200.00",
            "tipo": "Credito",
            "pagto": "cartao",
            "status": "Concluído"
        },
        {
            "id": 28,
            "data": "2021-04-08 16:14:22",
            "produto": "Pacote Super",
            "valor": "200.00",
            "tipo": "Credito",
            "pagto": "boleto",
            "status": "Em análise"
        },
        {
            "id": 36,
            "data": "2021-04-08 16:58:20",
            "produto": "Pacote Super",
            "valor": "200.00",
            "tipo": "Credito",
            "pagto": "credito",
            "status": "Concluído"
        }
    ]
    
  }
  getPaginatorData(event: any){
    console.log(event);
    if(event.pageIndex === this.pageIndex + 1){
       this.lowValue = this.lowValue + this.pageSize;
       this.highValue =  this.highValue + this.pageSize;
      }
   else if(event.pageIndex === this.pageIndex - 1){
      this.lowValue = this.lowValue - this.pageSize;
      this.highValue =  this.highValue - this.pageSize;
     }   
      this.pageIndex = event.pageIndex;
}
}
