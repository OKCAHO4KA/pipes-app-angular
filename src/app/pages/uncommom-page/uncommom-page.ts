import { Component, signal } from '@angular/core';
import { CardComponent } from '../../componentes/card/card';
import { AsyncPipe, I18nPluralPipe, I18nSelectPipe, JsonPipe, KeyValuePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { interval, map, tap } from 'rxjs';


const client1 =  {
  name: 'Oxana',
  lastName: 'Luchko',
  gender: 'female',
  age: 45,
  email: 'oxana.luchko@example.com',
  address: "Moscow, Russia"
}
const client2 =  {
  name: 'Kamen',
  lastName: 'Iliev',
  gender: 'male',
  age: 41,
  email: 'kamen.iliev@example.com',
  address: "Sofia, Bulgaria"
}

@Component({
  selector: 'app-uncommom-page',
  imports: [CardComponent, I18nSelectPipe, I18nPluralPipe, SlicePipe,AsyncPipe, JsonPipe, KeyValuePipe, TitleCasePipe],
  templateUrl: './uncommom-page.html',
})
export default class UncommomPageComponent {

//i18n Select
client = signal(client1);

invitaionMap = {
  male: 'invitarlo',
  female: 'invitarla',
}

changeClient(){
  if(this.client() === client1){
    this.client.set(client2);
    return;
  }
  return  this.client.set(client1);
  }


  //i18nPlural

clientsMap = signal({
  '=0': 'no tenemos ninguna persona registrada.',
  '=1': 'tenemos una persona registrada.',
  other: 'tenemos # personas registradas.'
});

clients = signal([
  'Oxana', 'Kamen', 'Pavel', 'Maria', 'Ivan', 
  'Petar', 'Georgi', 'Nikolay', 'Dimitar', 'Viktor', 
  'Elena', 'Anna', 'Diana', 'Svetlana', 'Yana'
]);

eliminarCliente() {
this.clients.update((clientes) => clientes.slice(1));
}

//keyValuePipe
profile = {
  name:'Oxana',
  age: 45,
  address: 'Moscow, Russia'
}

//asyncpipe

promiseValue : Promise<string> = new Promise ((resolve, reject)=>{

setTimeout(()=>{
  resolve('Hello, Async Pipe!'); 
  console.log("Promesa finalizada")},
   3500)

}
)

miObservable = interval(2000).pipe(
  map((value) => value + 1),
  tap((value) => console.log('Valor emitido por el observable:', value))
)

}