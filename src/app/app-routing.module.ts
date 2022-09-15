import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CardsComponent } from './cards/cards.component';
import { PreorderComponent } from './preorder/preorder.component';
import { BestsellerComponent } from './bestseller/bestseller.component';
import { BoxsetsComponent } from './boxsets/boxsets.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'cards',component:CardsComponent},
  {path:'preorder',component:PreorderComponent},
  {path:'bestseller',component:BestsellerComponent},
  {path:'boxsets',component:BoxsetsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
