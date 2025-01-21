import { Component, ElementRef, HostListener, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { IconButtonComponent } from '../icon-button/icon-button.component';
import { MenuItemComponent } from '../menu-item/menu-item.component';

@Component({
  selector: 'app-header',
  imports: [MenuComponent, IconButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  expandedHeight: number = 0;
  lastScrollY: number = 0;
  menuListener: (() => void) | undefined;
  headerExpanded = false;
  @ViewChildren(MenuItemComponent)
  menuItemComponents!: QueryList<MenuItemComponent>;

  constructor(private renderer: Renderer2, private el: ElementRef) {
  }

  ngAfterViewInit(): void {
    console.log("Is ready?")
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    const header = this.el.nativeElement.querySelector('.header');
    if (!header) return;

    const currentScrollY: number = window.scrollY;

    if (currentScrollY > 50 && currentScrollY > this.lastScrollY) {
      this.renderer.addClass(header, 'hide');
      this.renderer.setStyle(header, 'position', 'fixed');
      this.renderer.removeClass(header, 'shrink');
    } else if (currentScrollY <= 50) {
      this.renderer.removeClass(header, 'hide');
      this.renderer.removeClass(header, 'shrink');
      this.renderer.setStyle(header, 'position', 'initial');
    } else if (currentScrollY < this.lastScrollY) {
      this.renderer.addClass(header, 'shrink');
      this.renderer.removeClass(header, 'hide');
    }

    this.lastScrollY = currentScrollY;
  }

  


  handleExpandHeight(height: number){
    const header = this.el.nativeElement.querySelector('.header');
    if (!header) return;
    header.style.paddingBottom = height != 0 ? `${20 + height}px` : "5px" ;
    console.log({header, height})

  }

  ngOnDestroy(): void {
    if (this.menuListener) {
      this.menuListener();
    }

  }

}
