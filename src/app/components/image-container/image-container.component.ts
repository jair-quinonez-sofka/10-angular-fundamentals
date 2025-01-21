import { Component, ElementRef, input } from '@angular/core';

@Component({
  selector: 'app-image-container',
  imports: [],
  templateUrl: './image-container.component.html',
  styleUrl: './image-container.component.scss'
})
export class ImageContainerComponent {

  public backgroundTexture = input<string>();
  public walletImage = input<string>();
  public coinsPinkImage = input<string>();
  public ethereumCoinImage = input<string>();

  public isFullWidth = input<boolean>();
  public contenType = input<number>();

  public backgroundColor = input<string>();


  counter: number = 1;
  intervalId: any;


  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.startSlider();
  }

  ngAfterViewInit(): void {
    this.setUrls(this.counter)
  }

  ngOnDestroy(): void {
    this.stopSlider();
  }

  startSlider() {
    this.intervalId = setInterval(() => {
      this.setUrls(this.counter);
      this.counter = (this.counter % 3) + 1;
    }, 5000);
  }

  stopSlider() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }


  setUrls(item: number) {
    const backgprund = this.elementRef.nativeElement.querySelector("#background") as HTMLElement;
    const foreground = this.elementRef.nativeElement.querySelector("#foreground") as HTMLImageElement;
    if (!backgprund || !foreground) return;

    switch (item) {
      case 1:
        backgprund.className = "container__content__image--clear";
        foreground.src = "/assets/images/Notifications_1.webp";
        foreground.className = "image__messenger";
        break;
      case 2:
        backgprund.className = "container__content__image--purple";
        foreground.src = "/assets/images/Make_It_Your_Own.webp";
        foreground.className = "image__messenger";
        break;
      case 3:
        foreground.src = "/assets/images/Multiple_Profiles.webp";
        foreground.className = "image__messenger";
        backgprund.className = "container__content__image";
        break;
    }
  }


}
