import { Component, input } from '@angular/core';
import { BuiltCardComponent } from '../built-card/built-card.component';
import { ICard } from '../section-container/card.interface';

@Component({
  selector: 'app-buildt-cards-section',
  imports: [BuiltCardComponent],
  templateUrl: './buildt-cards-section.component.html',
  styleUrl: './buildt-cards-section.component.scss'
})
export class BuildtCardsSectionComponent {
 cards =  input<ICard[]>();
}
