import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CardsComponent } from './cards/cards.component';
import { BestsellerComponent } from './bestseller/bestseller.component';
import { BoxsetsComponent } from './boxsets/boxsets.component';
import { CollenComponent } from './collen/collen.component';
import { SudhaComponent } from './sudha/sudha.component';
import { RobinComponent } from './robin/robin.component';
import { RowlingComponent } from './rowling/rowling.component';
import { PauloComponent } from './paulo/paulo.component';
import { MorganComponent } from './morgan/morgan.component';
import { NewComponent } from './new/new.component';
import { ChildrenComponent } from './children/children.component';
import { AdultsComponent } from './adults/adults.component';
import { FictionComponent } from './fiction/fiction.component';
import { FeaturedComponent } from './featured/featured.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'cards',component:CardsComponent},
  {path:'bestseller',component:BestsellerComponent},
  {path:'boxsets',component:BoxsetsComponent},
  {path:'collen',component:CollenComponent},
  {path:'sudha',component:SudhaComponent},
  {path:'rowling',component:RowlingComponent},
  {path:'robin',component:RobinComponent},
  {path:'morgan',component:MorganComponent},
  {path:'paulo',component:PauloComponent},
  {path:'new',component:NewComponent},
  {path:'children',component:ChildrenComponent},
  {path:'adults',component:AdultsComponent},
  {path:'fiction',component:FictionComponent},
  {path:'featured',component:FeaturedComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
