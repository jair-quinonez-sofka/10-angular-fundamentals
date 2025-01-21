import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-video-complete',
  imports: [],
  templateUrl: './video-complete.component.html',
  styleUrl: './video-complete.component.scss'
})
export class VideoCompleteComponent {

  isHalf = input<boolean>();
  public clickLearnMore = output<string>();


   public handleClickL(){
    this.clickLearnMore.emit("Is Clicking Learn More")
  }

}
