import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Project {
  name: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
})
export class Projects {
  projects: Project[] = [
    {
      name: 'Spyfall',
      description: 'Real-time multiplayer web game built with Angular, C#, SignalR, and EF Core.',
      image: '/images/spyfall.png',
      tags: ['Angular', 'C#', 'SignalR', 'EF Core'],
      liveUrl: 'https://spyfall.collinkoldoff.dev',
      githubUrl: 'https://github.com/collink2451/spyfall-client',
    },
    {
      name: 'Gamenest',
      description: 'Real-time multiplayer battleship game with websocket integration.',
      image: '/images/gamenest.png',
      tags: ['React', 'Express', 'WebSockets'],
      liveUrl: 'https://gamenest.collinkoldoff.dev',
      githubUrl: 'https://github.com/collink2451/gamenest-client',
    },
    {
      name: 'Syllabus',
      description: 'Full stack web app displaying course syllabus data via a REST API.',
      image: '/images/syllabus.png',
      tags: ['React', 'Express', 'SQL'],
      liveUrl: 'https://syllabus.collinkoldoff.dev',
      githubUrl: 'https://github.com/collink2451/syllabus',
    },
    {
      name: 'Tic Tac Toe',
      description: 'Classic game with a leaderboard powered by an Express backend.',
      image: '/images/tictactoe.png',
      tags: ['React', 'Express'],
      liveUrl: 'https://tictactoe.collinkoldoff.dev',
      githubUrl: 'https://github.com/collink2451/tictactoe',
    },
  ];

  onImageError(event: any) {
    event.target.src = 'https://placehold.co/640x360';
  }
}
