import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hero } from './hero/hero';
import { Projects } from './projects/projects';
import { Skills } from './skills/skills';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Hero, RouterOutlet, Projects, Skills],
  templateUrl: './app.html',
})
export class App {}
