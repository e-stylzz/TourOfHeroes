import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

// using in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }         from './app.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroesComponent }      from './heroes.component';
import { DashboardComponent }   from './dashboard.component';
import { HeroService }          from './hero.service';
import { HeroSearchComponent }  from './hero-search.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdToolbarModule, MdCardModule }       from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
    MdButtonModule,
    MdToolbarModule,
    MdCardModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
  ],
  declarations: [ 
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    HeroSearchComponent
  ],
  providers: [
    HeroService,
  ],
  bootstrap:    [ 
    AppComponent 
  ]
})



export class AppModule { }
