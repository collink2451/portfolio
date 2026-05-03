import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Project {
  name: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl1: string;
  githubUrl2: string | null;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
})
export class Projects {
  projects: Project[] = [
    /*{
      name: 'Outflow',
      description: 'Personal Finance Management App built with Angular, ASP.NET, and EF Core.',
      image: '/images/outflow.png',
      tags: ['Angular', 'C#', 'ASP.NET', 'SignalR', 'EF Core'],
      liveUrl: 'https://outflow.collinkoldoff.dev',
      githubUrl1: 'https://github.com/collink2451/outflow-client',
      githubUrl2: 'https://github.com/collink2451/outflow-server',
    },*/
    {
      name: 'Spyfall',
      description:
        'Real-time multiplayer web game built with Angular, ASP.NET, SignalR, and EF Core.',
      image: '/images/spyfall.png',
      tags: ['Angular', 'C#', 'ASP.NET', 'SignalR', 'EF Core'],
      liveUrl: 'https://spyfall.collinkoldoff.dev',
      githubUrl1: 'https://github.com/collink2451/spyfall-client',
      githubUrl2: 'https://github.com/collink2451/spyfall-server',
    },
    {
      name: 'Game Nest',
      description: 'Real-time multiplayer battleship game with websocket integration.',
      image: '/images/gamenest.png',
      tags: ['React', 'Express', 'WebSockets'],
      liveUrl: 'https://gamenest.collinkoldoff.dev',
      githubUrl1: 'https://github.com/collink2451/gamenest-client',
      githubUrl2: 'https://github.com/collink2451/gamenest-server',
    },
    {
      name: 'Syllabus',
      description: 'Full stack web app displaying course syllabus data via a REST API.',
      image: '/images/syllabus.png',
      tags: ['React', 'Express', 'SQL'],
      liveUrl: 'https://syllabus.collinkoldoff.dev',
      githubUrl1: 'https://github.com/collink2451/syllabus',
      githubUrl2: 'https://github.com/collink2451/syllabus-server',
    },
    {
      name: 'Tic Tac Toe',
      description: 'Classic game with a leaderboard powered by an Express backend.',
      image: '/images/tictactoe.png',
      tags: ['React', 'Express'],
      liveUrl: 'https://tictactoe.collinkoldoff.dev',
      githubUrl1: 'https://github.com/collink2451/tictactoe',
      githubUrl2: 'https://github.com/collink2451/tictactoe-server',
    },
  ];

  onImageError(event: any) {
    event.target.style.display = 'none';
  }
}
