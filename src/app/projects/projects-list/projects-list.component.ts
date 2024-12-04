import { Component } from '@angular/core';
import {ProjectsService} from "../projects.service";
import {Project} from "../project";

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent {

  public projects: Project[] | undefined;
  constructor(protected projectsService: ProjectsService) {
    this.getProjects();
  }

  public getProjects(): any {
    this.projectsService.getProjects().subscribe(resp => {
      this.projects = resp;
    })
  }
}
