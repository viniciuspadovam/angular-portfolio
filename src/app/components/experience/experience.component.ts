import { Component } from '@angular/core';
import { LinkComponent } from '../link/link.component';
import { ILink } from '../../model/CustomTypes';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [LinkComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  readonly experiences: ILink[] = [
    {
      link: 'https://www.mjvinnovation.com/pt-br/',
      experiencePeriod: 'JAN 2023 - PRESENTE',
      title: 'Desenvolvedor',
      hirer: 'MJV',
      subTitle: 'Jr. Developer',
      description: 'Como desenvolvedor Júnior, sou responsável por desenvolver projetos de software, trabalhando tanto no frontend quanto no backend. Minhas tarefas incluem a criação e manutenção de interfaces de usuário, integração de APIs, desenvolvimento de bancos de dados e resolução de problemas técnicos em colaboração com a equipe.',
      tags: ['JavaScript', 'TypeScript', 'Angular', 'Node.js', 'Java', 'Spring Boot', 'OracleDB', 'MongoDB']
    },
    {
      link: 'https://www.mjvinnovation.com/pt-br/',
      experiencePeriod: 'ABR 2022 - JAN 2023',
      title: 'Desenvolvedor',
      hirer: 'MJV',
      subTitle: 'Trainee',
      description: 'Foi minha primeira experiência profissional onde participei de projetos, trabalhando mais no front-end do que no back-end. Minhas tarefas incluíram a criação e manutenção de interfaces de usuário simples e participei do desenvolvimentos de APIs e integrações com bancos de dados para me aprimorar.',
      tags: ['JavaScript', 'Jquery', 'JSP/JSF', 'Java']
    }
  ];
}
