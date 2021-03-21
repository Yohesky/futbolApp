import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { NgxSpinnerModule } from "ngx-spinner";
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataLeagueComponent } from './data-league/data-league.component';
import { LeaguesComponent } from './leagues/leagues.component';
import { PositionComponent } from './position/position.component';
import { ScoresComponent } from './scores/scores.component';
import { TeamComponent } from './team/team.component';
import { TeamsComponent } from './teams/teams.component';
import { MyLeaguesComponent } from './my-leagues/my-leagues.component';
import { MyPositionsComponent } from './my-positions/my-positions.component';
import { MyTeamsComponent } from './my-teams/my-teams.component';
import { MatchesComponent } from './matches/matches.component';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],

  declarations: [
    PagesComponent,
    DashboardComponent,
    DataLeagueComponent,
    MatchesComponent,
    LeaguesComponent,
    PositionComponent,
    ScoresComponent,
    TeamComponent,
    TeamsComponent,
    MyLeaguesComponent,
    MyPositionsComponent,
    MyTeamsComponent,
  ],
  exports: [
    PagesComponent,
    DashboardComponent,
    DataLeagueComponent,
    MatchesComponent,
    LeaguesComponent,
    PositionComponent,
    ScoresComponent,
    TeamComponent,
    TeamsComponent,
    MyLeaguesComponent,
    MyPositionsComponent,
    MyTeamsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
    NgxSpinnerModule,
    NgxPaginationModule,
    NgbModule,
    ComponentsModule
    ],
})
export class PagesModule {}
