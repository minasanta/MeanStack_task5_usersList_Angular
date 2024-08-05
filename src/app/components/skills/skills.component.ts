import { Component } from '@angular/core';
import { SkillsCardComponent } from '../skills-card/skills-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SkillsCardComponent, CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'], // Corrected property name
})
export class SkillsComponent {
  items = [
    {
      title: 'HTML',
      progress: '100%',
    },
    {
      title: 'CSS',
      progress: '100%',
    },
    {
      title: 'JavaScript',
      progress: '100%',
    },
    { title: 'Angular', progress: '50%'},
    { title: 'React', progress: '100%'},
    { title: 'Node.js', progress: '70%'},
    { title: 'MongoDB', progress: '70%'},
  ];
}
