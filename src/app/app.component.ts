import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { navActiveOpt } from './model/CustomTypes';
import { ProjectsComponent } from './components/projects/projects.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, AboutComponent, ExperienceComponent, ProjectsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  navActive: navActiveOpt = 'about';

  changeInformationDisplayed(opt: navActiveOpt) {
    this.navActive = opt;
  }
}
