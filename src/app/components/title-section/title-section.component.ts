import { Component, input } from '@angular/core';

@Component({
  selector: 'app-title-section',
  imports: [],
  templateUrl: './title-section.component.html',
  styleUrl: './title-section.component.scss'
})
export class TitleSectionComponent {

  public svgIcon = input<string>();
  public iconTitle = input<string>();
  public mainTitle = input<string>();
  public subTitle = input<string>();

  public isFullWidth = input<boolean>();

  public borderColor = input<string>();
  public iconColor = input<string>();


}
