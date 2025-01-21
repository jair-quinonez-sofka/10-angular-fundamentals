import { Component, input } from '@angular/core';
import { Link } from '../footer-bottom/footer-bottom.component';

@Component({
  selector: 'app-footer-colum',
  imports: [],
  templateUrl: './footer-colum.component.html',
  styleUrl: './footer-colum.component.scss'
})
export class FooterColumComponent {

  title = input<string>()
  links = input<Link[]>()
  isFirst = input<boolean>(false)
}
