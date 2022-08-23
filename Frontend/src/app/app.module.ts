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
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';
import {HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PersonalCardComponent,
    ProfilePictureComponent,
    ExperienceComponent,
    ExpCompComponent,
    EducationComponent,
    SkillsComponent,
    ProyectosComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    // !Acá importamos el ng-circle
     // Specify ng-circle-progress as an import
     NgCircleProgressModule.forRoot({}),
     HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
