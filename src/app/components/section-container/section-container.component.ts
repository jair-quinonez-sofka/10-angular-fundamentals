import { Component, input } from '@angular/core';
import { ImageContainerComponent } from '../image-container/image-container.component';
import { ContainerDetailsComponent } from '../container-details/container-details.component';
import { TitleSectionComponent } from '../title-section/title-section.component';
import { VideoCompleteComponent } from '../video-complete/video-complete.component';
import { PartialVideoComponent } from '../partial-video/partial-video.component';

@Component({
  selector: 'app-section-container',
  imports: [
    ImageContainerComponent,
    ContainerDetailsComponent,
    TitleSectionComponent,
    VideoCompleteComponent,
    PartialVideoComponent
  ],
  templateUrl: './section-container.component.html',
  styleUrl: './section-container.component.scss',
})
export class SectionContainerComponent {
  public direction = input<string>();
  //public isTitleSection = input<boolean>();
  public sectionType = input<string>();
  public isFullWidth = input<boolean>()
}
