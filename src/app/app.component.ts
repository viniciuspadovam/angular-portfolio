import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type navActiveOpt = 'about' | 'experience' | 'projects';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  navActive: navActiveOpt = 'about';

  changeInformationDisplayed(opt: navActiveOpt) {
    this.navActive = opt;
  }
}
