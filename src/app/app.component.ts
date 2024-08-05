import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SkillsCardComponent } from './components/skills-card/skills-card.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { PortfolioCardComponent } from './components/portfolio-card/portfolio-card.component';
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, AboutMeComponent, SkillsComponent,
  SkillsCardComponent, PortfolioComponent, PortfolioCardComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
