import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Home } from './Components/home/home';
import { About } from './Components/about/about';
import { Contact } from './Components/contact/contact';
import { NotFound } from './Components/not-found/not-found';
import { Star } from './Components/star/star';
import { Portfolio } from './Components/portfolio/portfolio';

export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component: Home, title:"Home", children:[
        {path:'', component:Star},
        
    ]},
    {path:'about', component:About, title:"About", children:[
        {path:'', component:Star},
    ]},
    {path:'contact', component:Contact, title:"Contact", children:[
        {path:'', component:Star},
    ]},
    {path:'portfolio', component:Portfolio, title:"Portfolio", children:[
        {path:'', component:Star},
    ]},
    {path:'**', component:NotFound, title:"Not Found"},
];
