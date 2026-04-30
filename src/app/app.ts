import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hero } from './hero/hero';
import { Projects } from './projects/projects';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Hero, RouterOutlet, Projects],
  templateUrl: './app.html',
})
export class App {}
