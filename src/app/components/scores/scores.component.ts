import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertsService } from 'src/app/services/alerts/alerts.service';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css'],
})
export class ScoresComponent implements OnInit {
  topLeagues: any[] = ['SA', 'PD', 'BL1', 'PL', 'FL1'];
  laLiga: any[] = [];
  leagueOne: any[] = [];
  bundesliga: any[] = [];
  premier: any[] = [];
  serieA: any[] = [];
  search: boolean = false;
  ligue: string = '';
  liguesToSearch: any[] = [];
  nameLeague: string = '';
  constructor(
    private api: ApiService,
    private alerts: AlertsService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.getTopScoresTopLeagues();
    this.getleagues();
  }

  getleagues() {
    this.spinner.show();

    this.api
      .getLeagues()
      .then((res) => {
        console.log(res);
        this.liguesToSearch = res.competitions;
        this.spinner.hide();
      })
      .catch((err) => {
        console.log(err);
        this.spinner.hide();

        this.alerts.alertError('Something went wrong, try again');
      });
  }

  getTopScoresTopLeagues() {
    this.spinner.show()

    this.topLeagues.forEach((l) => {
      this.api
        .scores(l)
        .then((res) => {
          console.log(res);
          if (res.competition.code === 'BL1') {
            this.bundesliga = res.scorers;
          }

          if (res.competition.code === 'FL1') {
            this.leagueOne = res.scorers;
          }

          if (res.competition.code === 'SA') {
            this.serieA = res.scorers;
          }

          if (res.competition.code === 'PD') {
            this.laLiga = res.scorers;
          }

          if (res.competition.code === 'PL') {
            this.premier = res.scorers;
          }
        })
        .catch((err) => {
          console.log(err);
    this.spinner.hide()

          this.alerts.alertError('Something went wrong, try again');
        });
    });
  }

  searchScorers() {
    this.spinner.show()
    let ligue = this.liguesToSearch.find(
      (l) => l.name.toLowerCase() === this.ligue.toLowerCase()
    );
    if (!ligue) {
      this.alerts.alertError('Not found');
    } else {
      this.api
        .scores(ligue.code)
        .then((res) => {
          console.log(res);
          this.nameLeague = res.competition.area.name;
          this.search = true;
          this.liguesToSearch = res.scorers;
    this.spinner.hide()

        })
        .catch((err) => {
          console.log(err);
    this.spinner.hide()

          this.alerts.alertError('We dont have this data yet');
        });
    }
  }
}
