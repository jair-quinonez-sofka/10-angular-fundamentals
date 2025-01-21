import { Component, input } from '@angular/core';
import { ImageContainerComponent } from '../image-container/image-container.component';
import { ContainerDetailsComponent } from '../container-details/container-details.component';

@Component({
  selector: 'app-card-image-section',
  imports: [
    ImageContainerComponent,
        ContainerDetailsComponent
  ],
  templateUrl: './card-image-section.component.html',
  styleUrl: './card-image-section.component.scss'
})
export class CardImageSectionComponent {

  public direction = input<string>();
  public backgroundColor = input<string>();




  public imageSource = input<string>();
  public floatSource = input<string>();
  public floatSorceTwo = input<string>();


}
