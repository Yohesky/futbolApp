import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyLeaguesComponent } from './my-leagues/my-leagues.component';
import { MyPlayersComponent } from './my-players/my-players.component';
import { MyTeamsComponent } from './my-teams/my-teams.component';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MyPositionsComponent } from './my-positions/my-positions.component';

@NgModule({
  declarations: [
    MyLeaguesComponent,
    MyPlayersComponent,
    MyTeamsComponent,
    MyPositionsComponent
  ],
  exports: [
    MyLeaguesComponent,
    MyPlayersComponent,
    MyTeamsComponent,
    MyPositionsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgxPaginationModule,
    NgbModule,
    FormsModule,
    NgxSpinnerModule
  ]
})
export class FavoritesModule { }
