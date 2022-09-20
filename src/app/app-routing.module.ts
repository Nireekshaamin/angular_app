import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CardsComponent } from './cards/cards.component';
import { Child8Component } from './bestseller/child8/child8.component';
import { BoxchildComponent } from './boxsets/boxchild/boxchild.component';
import { CollenComponent } from './collen/collen.component';
import { Csudha1Component } from './sudha1/csudha1/csudha1.component';
import { CsudhaComponent } from './sudha/csudha/csudha.component';
import { RobinComponent } from './robin/robin.component';
import { RowlingComponent } from './rowling/rowling.component';
import { PauloComponent } from './paulo/paulo.component';
import { MorganComponent } from './morgan/morgan.component';
import { NewchildComponent } from './new/newchild/newchild.component';
import { CchildComponent } from './children/cchild/cchild.component';
import { CadultsComponent } from './adults/cadults/cadults.component';
import { FictionComponent } from './fiction/fiction.component';
import { CfeaturedComponent } from './featured/cfeatured/cfeatured.component';
//import { BookComponent } from './book/book.component';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { Child1Component } from './school/child1/child1.component';
import { CounterchildComponent } from './counter/counterchild/counterchild.component';
import { TestComponent } from './test/test.component';
import { Child5Component } from './non/child5/child5.component';
import { LoginComponent } from './login/login.component';
import { CollenchildComponent } from './collen/collenchild/collenchild.component';
import { Child6Component } from './collen1/child6/child6.component';
import { Child7Component } from './book/child7/child7.component';
import { RegisterComponent } from './register/register.component';





const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'cards',component:CardsComponent},
  {path:'bestseller',component:Child8Component},
  {path:'boxsets',component:BoxchildComponent},
  {path:'collen',component:CollenComponent},
  {path:'sudha1',component:Csudha1Component},
  {path:'sudha',component:CsudhaComponent},
  {path:'rowling',component:RowlingComponent},
  {path:'robin',component:RobinComponent},
  {path:'morgan',component:MorganComponent},
  {path:'paulo',component:PauloComponent},
  {path:'new',component:NewchildComponent},
  {path:'children',component:CchildComponent},
  {path:'adults',component:CadultsComponent},
  {path:'fiction',component:FictionComponent},
  {path:'featured',component:CfeaturedComponent},
  //{path:'book',component:BookComponent},
  {path:'advertisement',component:AdvertisementComponent},
  {path:'school',component:Child1Component},
  {path:'counter',component:CounterchildComponent},
  {path:'test',component:TestComponent},
  {path:'non',component:Child5Component},
  {path:'login',component:LoginComponent},
  {path:'collen',component:CollenchildComponent},
  {path:'collen1',component:Child6Component},
  {path:'book',component:Child7Component},
  {path:'register',component:RegisterComponent}

 




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
