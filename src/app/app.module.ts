import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PersonalCardComponent } from './components/personal-card/personal-card.component';
import { ProfilePictureComponent } from './components/profile-picture/profile-picture.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ExpCompComponent } from './components/exp-comp/exp-comp.component';
import { EducationComponent } from './components/education/education.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { SkillsComponent } from './components/skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PersonalCardComponent,
    ProfilePictureComponent,
    ExperienceComponent,
    ExpCompComponent,
    EducationComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    // !Acá importamos el ng-circle
     // Specify ng-circle-progress as an import
     NgCircleProgressModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
