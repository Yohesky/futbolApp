import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertsService } from 'src/app/services/alerts/alerts.service';
import { ApiService } from 'src/app/services/api/api.service';
import { MyApiService } from 'src/app/services/myApi/my-api.service';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css'],
})
export class PositionComponent implements OnInit {
  team: string = '';
  teams: any[] = [];
  leagues: any[] = [];
  positions: any = {
    season: {},
    standings: []
  }
  idLeague:number
  showTable:boolean = false
  constructor(
    private as: ActivatedRoute,
    private api: ApiService,
    private alerts: AlertsService,
    private spinner: NgxSpinnerService,
    private myApi: MyApiService
  ) {}

  ngOnInit(): void {
    this.getAllTeams();
  }

  getAllTeams() {
    this.spinner.show();

    this.api
      .getLeagues()
      .then((res) => {
        console.log(res);
        this.teams = res.competitions;
        console.log(this.teams);
        this.spinner.hide();
      })
      .catch((err) => {
        console.log(err);
        this.spinner.hide();

        this.alerts.alertError('Something went wrong');
      });
  }

  searchTeam() {
    console.log(this.team);
    let leagues = this.teams.filter(
      (t) => t.area.name.toLowerCase() == this.team.toLowerCase()
    );
    this.leagues = leagues;
    if (this.leagues.length == 0) {
      this.alerts.alertError('No league found');
    }
  }

  getTableLeague(id:number) {
    this.spinner.show()
    this.api
      .table(id)
      .then((res) => {
        this.spinner.hide()
        this.positions.season = res.season
        this.positions.standings = res.standings[0]
        this.showTable = true
        console.log(this.positions)
      })
      .catch((err) => {
        console.log(err)
        this.spinner.hide()
        this.alerts.alertError('We dont have this data yet')
      });
  }

  savePositions(){
    this.spinner.show()
    this.myApi.savePositions(this.idLeague)
              .then(res => {
                console.log(res)
                this.spinner.hide()
                this.alerts.alertSuccess("Positions saved")
              })
              .catch(err => {
                console.log(err)
                this.spinner.hide()
                this.alerts.alertError("Something went wrong, try again")
              })
  }

  selected(league){
    this.idLeague = league.id
    this.getTableLeague(league.id)
  }
}
