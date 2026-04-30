import { Component } from '@angular/core';

interface SkillGroup {
  category: string;
  skills: string[];
}

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  skillGroups: SkillGroup[] = [
    {
      category: 'Languages & Frameworks',
      skills: [
        'C#',
        'ASP.NET',
        '.NET Core',
        'Entity Framework Core',
        'Angular',
        'TypeScript',
        'React',
        'JavaScript',
        'Node.js',
        'Java',
      ],
    },
    {
      category: 'Database',
      skills: ['SQL Server', 'PostgreSQL', 'MySQL', 'MongoDB'],
    },
    {
      category: 'Cloud & Infrastructure',
      skills: ['Docker', 'Kubernetes', 'GitHub Actions', 'Azure', 'AWS'],
    },
    {
      category: 'Other',
      skills: ['REST APIs', 'SignalR', 'Event-Driven Architecture', 'CI/CD', 'Git', 'Code Review'],
    },
  ];
}
