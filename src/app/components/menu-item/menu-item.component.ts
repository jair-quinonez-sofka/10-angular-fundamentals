import { Component, ElementRef, input, output, signal } from '@angular/core';
import { SubMenuComponent } from '../sub-menu/sub-menu.component';

@Component({
  selector: 'app-menu-item',
  imports: [SubMenuComponent],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.scss'
})
export class MenuItemComponent {

   label = input<string>();
   icon= input<string>();
   isHome = input<boolean>();
   subitems = input<string[]>();
   isOpen: boolean = false;
   hoverHeight = output<number>();

   constructor(public el: ElementRef) {}


   toggleSubmenu() {
    this.hoverHeight.emit(46 * (this.subitems()!.length));
    if(this.subitems()){
       this.isOpen = !this.isOpen;
    }
  }
  closeSubmenu() {
    this.hoverHeight.emit(0);
    this.isOpen = !this.isOpen;
  }
}
