import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.html',
})
export class CardComponent {
title = input.required();


}
