import { CommonModule } from '@angular/common';
import { Component, EventEmitter, input, output, Output } from '@angular/core';

@Component({
  selector: 'app-sub-menu',
  imports: [CommonModule],
  templateUrl: './sub-menu.component.html',
  styleUrl: './sub-menu.component.scss'
})
export class SubMenuComponent {

  public subitems = input<string[]>();


}
