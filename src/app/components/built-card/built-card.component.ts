import { Component, input } from '@angular/core';

@Component({
  selector: 'app-built-card',
  imports: [],
  templateUrl: './built-card.component.html',
  styleUrl: './built-card.component.scss'
})
export class BuiltCardComponent {
  public subtitle = input<string>()
  public title = input<string>()
  public image = input<string>()

}
