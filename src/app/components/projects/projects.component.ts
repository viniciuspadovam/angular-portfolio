import { Component } from '@angular/core';
import { ILink } from '../../model/CustomTypes';
import { LinkComponent } from '../link/link.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [LinkComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  readonly projects: ILink[] = [
    {
      link: 'https://github.com/viniciuspadovam/vuttr-spring',
      title: 'Very Useful Tools to Remember',
      description: 'Uma aplicação VUTTR (Very Useful Tools to Remember). A aplicação é um simples repositório para gerenciar ferramentas com seus respectivos nomes, links, descrições e tags.'
                   + '<br/>Criei este projeto pessoal para estudar documentação, testes, docker e autenticação com JWT e para testar meus conhecimentos prévios também.',
      tags: ['Java', 'Spring Boot', 'OpenAPI 3.0', 'Swagger', 'Docker', 'Spring Security', 'Junit', 'MongoDB']
    },
    {
      link: 'https://github.com/viniciuspadovam/password-generator-python',
      title: 'Gerador de senhas',
      description: 'Um programa que gera senhas automaticamente com um número de caracteres escolhido pelo usuário e os salva em um arquivo .txt com chave/valor',
      tags: ['Python']
    },
    {
      link: 'https://github.com/viniciuspadovam/CRUD-Spring-Angular',
      title: 'CRUD com Spring e Angular',
      description: 'Projeto criado para estudar, além das tecnologias usadas, o padrão MVC e todas as operações de um CRUD padrão.',
      tags: ['TypeScript', 'Angular', 'Java', 'Spring Boot', 'Spring Security', 'MySQL']
    }
  ]
}
