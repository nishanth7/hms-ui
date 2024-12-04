import { Injectable } from '@angular/core';
import {Project} from "./project";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(protected http: HttpClient) { }

  getProjects() {
    return this.http.get<Project[]>('/v1/projects?page=1&perPage=20');
  }
}
