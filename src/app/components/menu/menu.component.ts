import { Component, output } from '@angular/core';
import { SubMenuComponent } from '../sub-menu/sub-menu.component';
import { CommonModule } from '@angular/common';
import { MenuItemComponent } from '../menu-item/menu-item.component';

@Component({
  selector: 'app-menu',
  imports: [MenuItemComponent, CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  hoverHeightM = output<number>(); 

  handleHover(height: number){
    console.log(height);
    this.hoverHeightM.emit(height);
  }

  menuItems = [
    {
      isHome:true,
        icon: "/assets/images/Mark_01.webp",
        subitems:[]
    },
    {
      label: 'Apps',
      subitems: ['Mobile', 'Desktop'],
    },
    {
      label: 'Ecosystem',
      subitems: ['Keycard', 'Status Network'],
    },
    {
      label: 'Organization',
      subitems: ['Manifesto', 'Team', 'Brand', 'Jobs'],
    },
    {
      label: 'Help',
      subitems: ['Overview', 'Getting started', 'Wallet', 'Profile', 'Messaging', 'Communities'],
    },
    {
      label: 'Collaborate',
      subitems: ['Discuss', 'Getting started', 'Feature upvote', 'Blog', 'Translations'],
    },
    {
      label: 'Developers',
      subitems: ['Repos', 'Insights', 'Specs'],
    },
    {
      label: 'SNT',
      subitems: ['Token', 'Release schedule', 'Whitepaper', 'Governance', 'Curate', 'Exchanges'],
    },
  ];
}
