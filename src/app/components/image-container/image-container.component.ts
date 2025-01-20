import { Component, input } from '@angular/core';

@Component({
  selector: 'app-image-container',
  imports: [],
  templateUrl: './image-container.component.html',
  styleUrl: './image-container.component.scss'
})
export class ImageContainerComponent {

  public backgroundTexture  = input<string>();
  public walletImage   = input<string>();
  public coinsPinkImage   = input<string>();
  public ethereumCoinImage   = input<string>();

  public isFullWidth = input<boolean>();
  public contenType = input<number>();

  constructor() { }
  
  
}
