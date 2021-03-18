import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeaguesComponent } from './leagues/leagues.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { DataLeagueComponent } from './data-league/data-league.component';
import { RouterModule } from '@angular/router';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListMatchesComponent } from './data-league/list-matches/list-matches.component';
import { TeamsComponent } from './teams/teams.component';
import { FormsModule } from '@angular/forms';
import { TeamComponent } from './team/team.component';
import { ScoresComponent } from './scores/scores.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { MatchesComponent } from './matches/matches.component';
import { ListComponent } from './matches/list/list.component';
import { PositionComponent } from './position/position.component';
import { FavoritesModule } from './favorite/favorites.module';


@NgModule({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],

  declarations: [
    DashboardComponent,
    LeaguesComponent,
    DataLeagueComponent,
    ListMatchesComponent,
    TeamsComponent,
    TeamComponent,
    ScoresComponent,
    MatchesComponent,
    ListComponent,
    PositionComponent,
  ],
  exports: [
    DashboardComponent,
    LeaguesComponent,
    DataLeagueComponent,
    ListMatchesComponent,
    TeamsComponent,
    TeamComponent,
    ScoresComponent,
    MatchesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgxPaginationModule,
    NgbModule,
    FormsModule,
    NgxSpinnerModule,
    FavoritesModule
  ]
})
export class ComponentsModuleModule { }
