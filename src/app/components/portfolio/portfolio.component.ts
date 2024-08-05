import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PortfolioCardComponent } from '../portfolio-card/portfolio-card.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, PortfolioCardComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  items = [
    {
      title: 'Portfolio',
      description: 'Personal portfolio website',
      image: 'assets/portfolio.png',
      url: '',
    },
    {
      title: 'Blog',
      description: 'Personal blog website',
      image: 'assets/blog.png',
      url: '',
    },
    {
      title: 'E-commerce',
      description: 'E-commerce website',
      image: 'assets/ecommerce.png',
      url: '',
    },
    {
      title: 'Social Media',
      description: 'Social media website',
      image: 'assets/social-media.png',
      url: '',
    },
  ];
}
