import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { ImageContainerComponent } from './components/image-container/image-container.component';
import { SectionContainerComponent } from './components/section-container/section-container.component';

@Component({
  selector: 'app-root',
  imports: [SectionContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
}
