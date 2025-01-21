import { Component, input, output } from '@angular/core';
import { ImageContainerComponent } from '../image-container/image-container.component';
import { ContainerDetailsComponent } from '../container-details/container-details.component';
import { TitleSectionComponent } from '../title-section/title-section.component';
import { VideoCompleteComponent } from '../video-complete/video-complete.component';
import { PartialVideoComponent } from '../partial-video/partial-video.component';
import { BuiltCardComponent } from '../built-card/built-card.component';
import { ICard } from './card.interface';



@Component({
  selector: 'app-section-container',
  imports: [

  ],
  templateUrl: './section-container.component.html',
  styleUrl: './section-container.component.scss',
})
export class SectionContainerComponent {
  public direction = input<string>();
  public sectionType = input<string>();
  public isFullWidth = input<boolean>();

  handleClickLearn(text: string): void {
    console.log({text});
  }
  

  public cards: ICard[] = [
    {
      title: "Open source",
      subtitle: "Status is a community project. Anyone can build, contribute to and fork its source code.",
      image: "assets/images/b1.webp"
    },
    {
      title: "Decentralised",
      subtitle: "Communities are exclusively powered by their members running the Status desktop app.",
      image: "assets/images/b2.webp"
    },
    {
      title: "Secure",
      subtitle: "Self-custodial keys safeguard your wallets and messages via elliptic curve cryptography.",
      image: "assets/images/b3.webp"
    },
    {
      title: "Community driven",
      subtitle: "SNT holders can influence future developments and governance decisions.",
      image: "assets/images/b4.webp"
    },
    {
      title: "Permissionless",
      subtitle: "Nobody can stop you chatting with your friends because nobody controls Status’ p2p network.",
      image: "assets/images/b5.webp"
    },
    {
      title: "Free and ad-free",
      subtitle: "No ads. No paid tier. No imposed limits. It’s just free.",
      image: "assets/images/b6.webp"
    },
  ];

}
