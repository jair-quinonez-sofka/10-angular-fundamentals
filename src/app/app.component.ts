import { Component } from '@angular/core';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from "./components/header/header.component";

@Component({
  selector: 'app-root',
  imports: [MainComponent, FooterComponent, HeaderComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
}
