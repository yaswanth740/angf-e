import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './MyComponents/about/about.component';
import { BillingInstructComponent } from './MyComponents/billing_ins/billing-instruct/billing-instruct.component';
import { ContactComponent } from './MyComponents/contact/contact.component';
import { EditComponent } from './MyComponents/edit/edit.component';
import { EmailComponent } from './MyComponents/email/email.component';
import { HomeComponent } from './MyComponents/home/home.component';
import { AddEdiCompoComponent } from './MyComponents/Homemodel/add-edi-compo/add-edi-compo.component';
import { ShowCompoComponent } from './MyComponents/Homemodel/show-compo/show-compo.component';
import { ShowDetailsComponent } from './MyComponents/show-details/show-details.component';

const routes: Routes = [
  {path:"",redirectTo: 'Home', pathMatch: 'full'},
  {path:"Home",component:HomeComponent},
  {path:"billing-instruction",component:BillingInstructComponent},
  {path:"Lobcat",component:ShowCompoComponent},
  {path:"Lobcat/:LobcatId/view",component:ShowDetailsComponent,data: { animation: 'isRight' }},
  {path:"Lobcat/create",component:AddEdiCompoComponent,data: { animation: 'isLeft' }},
  {path:"Lobcat/:LobcatId/edit",component:EditComponent,data: { animation: 'isRight' }},
  {path:"about",component:AboutComponent},
  {path:"contact",component:ContactComponent},
  {path:"email-template",component:EmailComponent,data: { animation: 'isRight' }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
