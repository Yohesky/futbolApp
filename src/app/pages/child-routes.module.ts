import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataLeagueComponent } from './data-league/data-league.component';
import { TeamsComponent } from './teams/teams.component';
import { MatchesComponent } from './matches/matches.component';
import { TeamComponent } from './team/team.component';
import { ScoresComponent } from './scores/scores.component';
import { PositionComponent } from './position/position.component';
import { MyTeamsComponent } from './my-teams/my-teams.component';
import { MyLeaguesComponent } from './my-leagues/my-leagues.component';
import { MyPositionsComponent } from './my-positions/my-positions.component';




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
