import { Component, input } from '@angular/core';

@Component({
  selector: 'app-icon-button',
  imports: [],
  templateUrl: './icon-button.component.html',
  styleUrl: './icon-button.component.scss'
})
export class IconButtonComponent {
  public testButton = input<string>();
  public icon = input<string>();
  public class = input<string>();

}
