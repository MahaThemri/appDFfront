import { AddComponent } from './add/add.component';
import { Details2Component } from './details2/details2.component';

import { DetailsComponent } from './details/details.component';
import { LoginComponent } from './login/login.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClaimComponent } from './add-claim/add-claim.component';

const routes: Routes = [ 
  {path :"" ,redirectTo:"login", pathMatch:"full"},
  {path :"login",component:LoginComponent},
  {path:"details",component : DetailsComponent},
  {path : "upload",component : AddClaimComponent },
  {path :"photo",component : Details2Component},
  {path:"claim", component : AddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
