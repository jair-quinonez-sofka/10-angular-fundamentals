import { Component, input } from '@angular/core';
import { DetailsBoxComponent } from '../details-box/details-box.component';

@Component({
  selector: 'app-container-details',
  imports: [DetailsBoxComponent],
  templateUrl: './container-details.component.html',
  styleUrl: './container-details.component.scss'
})
export class ContainerDetailsComponent {

  public titleImage  = input<string>();
  public inconsImage   = input<string>();
  public containerDescription = input<string>();
  public containterTitle = input<string>();

  
}
