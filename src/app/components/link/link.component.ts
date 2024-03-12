import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TagComponent } from '../tag/tag.component';
import { ILink } from '../../model/CustomTypes';

@Component({
  selector: 'app-link',
  standalone: true,
  imports: [CommonModule, TagComponent],
  templateUrl: './link.component.html',
  styleUrl: './link.component.css'
})
export class LinkComponent {

  @Input() data: ILink | undefined;


}
