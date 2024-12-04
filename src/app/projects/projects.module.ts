import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import {ProjectsRoutingModule} from "./projects-routing.module";
import {SharedModule} from "@shared";
import {ProjectsService} from "./projects.service";



@NgModule({
  declarations: [
    ProjectsListComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    SharedModule
  ],
  providers: [ProjectsService]
})
export class ProjectsModule { }
