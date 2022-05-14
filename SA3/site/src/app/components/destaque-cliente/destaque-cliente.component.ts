import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-destaque-cliente',
  templateUrl: './destaque-cliente.component.html',
  styleUrls: ['./destaque-cliente.component.css']
})
export class DestaqueClienteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cliente1 = new User("Pedro","Bons preços.")
  cliente2 = new User("Maria","Entrega rápida.")
  cliente3 = new User("João","Recomendo.")
  cliente4 = new User("Ana paula","Ótimo atendimento.")

}
