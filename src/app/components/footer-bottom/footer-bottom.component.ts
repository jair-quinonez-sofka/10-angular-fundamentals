import { Component, input } from '@angular/core';


export interface Link {
  label: string;
  href: string;
}

@Component({
  selector: 'app-footer-bottom',
  imports: [],
  templateUrl: './footer-bottom.component.html',
  styleUrl: './footer-bottom.component.scss'
})
export class FooterBottomComponent {

  links = input<Link[]>()
}
