import { Component } from '@angular/core';
import {Routes} from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';

export const routes = [{path: 'Register', component: RegisterComponent},
{path: '', component: HomeComponent},{path: 'Profile', component: ProfilePageComponent}];
