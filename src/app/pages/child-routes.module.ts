import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { LeaguesComponent } from '../components/leagues/leagues.component';
import { RouterModule, Routes } from '@angular/router';
import { DataLeagueComponent } from '../components/data-league/data-league.component';
import { TeamsComponent } from '../components/teams/teams.component';
import { TeamComponent } from '../components/team/team.component';
import { ScoresComponent } from '../components/scores/scores.component';
import { MatchesComponent } from '../components/matches/matches.component';
import { PositionComponent } from '../components/position/position.component';
import { MyTeamsComponent } from '../components/favorite/my-teams/my-teams.component';
import { MyLeaguesComponent } from '../components/favorite/my-leagues/my-leagues.component';
import { MyPlayersComponent } from '../components/favorite/my-players/my-players.component';
import { MyPositionsComponent } from '../components/favorite/my-positions/my-positions.component';


const childRoutes: Routes = [
  {
    path: '', component: DashboardComponent
  },
  {
    path: 'league/:name', component: DataLeagueComponent
  },
  {
    path: 'teams', component: TeamsComponent
  },
  {
    path: 'match/:id', component: MatchesComponent
  },
  {
    path: 'team/:idTeam', component: TeamComponent
  },
  {
    path: 'top-scores', component: ScoresComponent
  },
  {
    path: 'positions', component: PositionComponent
  },
  {
    path: 'myTeams', component: MyTeamsComponent
  },
  {
    path: 'myLeagues', component: MyLeaguesComponent
  },
  {
    path: 'myPositions', component: MyPositionsComponent
  },


  {path: "**", redirectTo: 'home'},
]

@NgModule({
  imports: [
    RouterModule.forChild(childRoutes)
  ],
  exports: [RouterModule]
})
export class ChildRoutesModule { }
