import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { navActiveOpt } from './model/CustomTypes';
import { fadeInOut } from './service/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, AboutComponent, ExperienceComponent, ProjectsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [fadeInOut],
  providers: [BrowserAnimationsModule]
})
export class AppComponent {
  navActive: navActiveOpt = 'about';

  changeInformationDisplayed(opt: navActiveOpt) {
    this.navActive = opt;
  }
}
