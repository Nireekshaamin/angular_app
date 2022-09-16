import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { CardsComponent } from './cards/cards.component';
import { SearchComponent } from './search/search.component';
import { BestsellerComponent } from './bestseller/bestseller.component';
import { BoxsetsComponent } from './boxsets/boxsets.component';
import { CollenComponent } from './collen/collen.component';
import { SudhaComponent } from './sudha/sudha.component';
import { RobinComponent } from './robin/robin.component';
import { PauloComponent } from './paulo/paulo.component';
import { RowlingComponent } from './rowling/rowling.component';
import { MorganComponent } from './morgan/morgan.component';
import { NewComponent } from './new/new.component';
import { ChildrenComponent } from './children/children.component';
import { AdultsComponent } from './adults/adults.component';
import { FictionComponent } from './fiction/fiction.component';
import { AuthorsComponent } from './authors/authors.component';
import { FeaturedComponent } from './featured/featured.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    CardsComponent,
    SearchComponent,
    BestsellerComponent,
    BoxsetsComponent,
    CollenComponent,
    SudhaComponent,
    RobinComponent,
    PauloComponent,
    RowlingComponent,
    MorganComponent,
    NewComponent,
    ChildrenComponent,
    AdultsComponent,
    FictionComponent,
    AuthorsComponent,
    FeaturedComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
