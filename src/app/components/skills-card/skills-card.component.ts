import { asNativeElements, Component, Input, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-skills-card',
  standalone: true,
  imports: [],
  templateUrl: './skills-card.component.html',
  styleUrls: ['./skills-card.component.css'], // Corrected property name
})
export class SkillsCardComponent {
  @Input() data: any;

  constructor(private elRef: ElementRef) {}

  ngAfterViewInit() {
    this.setPWidth();
  }

  setPWidth() {
    const p = this.elRef.nativeElement.querySelector('#progress');
    p.style = `width: ${this.data.progress}`;
  }
}
