import { Component } from '@angular/core';
import { IconButtonComponent } from '../icon-button/icon-button.component';
import { FooterLogoComponent } from '../footer-logo/footer-logo.component';
import { FooterColumComponent } from '../footer-colum/footer-colum.component';
import { FooterBottomComponent } from '../footer-bottom/footer-bottom.component';

@Component({
  selector: 'app-footer',
  imports: [FooterLogoComponent, FooterColumComponent, FooterBottomComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  footerColumns = [
    {
      title: '',
      links: [
      ]
    },
    {
      title: 'Apps',
      links: [
        { label: 'Mobile', href: '#' },
        { label: 'Desktop', href: '#' }
      ]
    },
    {
      title: 'Ecosystem',
      links: [
        { label: 'Keycard', href: '#' },
        { label: 'Status Network', href: '#' }
      ]
    },
    {
      title: 'Organization',
      links: [
        { label: 'Manifesto', href: '#' },
        { label: 'Team', href: '#' },
        { label: 'Brand', href: '#' },
        { label: 'Jobs', href: '#' }
      ]
    },
    {
      title: 'Help',
      links: [
        { label: 'Overview', href: '#' },
        { label: 'Getting started', href: '#' },
        { label: 'Wallet', href: '#' },
        { label: 'Profile', href: '#' },
        { label: 'Messaging', href: '#' },
        { label: 'Communities', href: '#' }
      ]
    },
    {
      title: 'Collaborate',
      links: [
        { label: 'Discuss', href: '#' },
        { label: 'Feature upvote', href: '#' },
        { label: 'Blog', href: '#' },
        { label: 'Translations', href: '#' }
      ]
    },
    {
      title: 'Developers',
      links: [
        { label: 'Repos', href: '#' },
        { label: 'Insights', href: '#' },
        { label: 'Specs', href: '#' }
      ]
    },
    {
      title: 'SNT',
      links: [
        { label: 'Token', href: '#' },
        { label: 'Release schedule', href: '#' },
        { label: 'Whitepaper', href: '#' },
        { label: 'Governance', href: '#' },
        { label: 'Curate', href: '#' },
        { label: 'Exchanges', href: '#' }
      ]
    },
  ];

  footerBottomLinks = [
    { label: 'Terms of Use', href: '#' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Security', href: '#' }
  ]
}
