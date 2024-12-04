import { Injectable } from '@angular/core';
import {Project} from "../../projects/project";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(protected http: HttpClient) { }

  getProjects() {
    return this.http.get<Project[]>('/v1/projects');
  }
}
