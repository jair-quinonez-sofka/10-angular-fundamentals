import { Component, input } from '@angular/core';

@Component({
  selector: 'app-details-box',
  imports: [],
  templateUrl: './details-box.component.html',
  styleUrl: './details-box.component.scss'
})
export class DetailsBoxComponent {

  public title = input<string>();
  public description = input<string>();
  public imageIcon = input<string>();
}
