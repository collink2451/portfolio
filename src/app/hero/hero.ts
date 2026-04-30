import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
})
export class Hero implements OnInit, OnDestroy {
  titles = ['Software Engineer', 'Full Stack Developer', 'C# / .NET Developer'];

  currentText = signal<string>('');
  private currentIndex = 0;
  private charIndex = 0;
  private isErasing = false;
  private timer: any;

  ngOnInit() {
    this.type();
  }

  ngOnDestroy() {
    clearTimeout(this.timer);
  }

  type() {
    const current = this.titles[this.currentIndex];

    if (!this.isErasing) {
      this.currentText.set(current.slice(0, ++this.charIndex));
      if (this.charIndex === current.length) {
        this.timer = setTimeout(() => {
          this.isErasing = true;
          this.type();
        }, 3000);
        return;
      }
    } else {
      this.currentText.set(current.slice(0, --this.charIndex));
      if (this.charIndex === 0) {
        this.isErasing = false;
        this.currentIndex = (this.currentIndex + 1) % this.titles.length;
      }
    }

    this.timer = setTimeout(() => this.type(), this.isErasing ? 50 : 100);
  }
}
