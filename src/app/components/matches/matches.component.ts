import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertsService } from 'src/app/services/alerts/alerts.service';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  id:number = 0
  matches: any[] = []
  team: any = {}
  constructor(
    private as: ActivatedRoute,
    private api: ApiService,
    private alerts: AlertsService,
    private spinner: NgxSpinnerService,
    ) { }

  ngOnInit(): void {
    this.getParams()
    this.getMatch()
  }

  getParams() {
    this.id = this.as.snapshot.params.id;
    console.log(this.id)
  }


  getMatch(){
    this.spinner.show()
    this.api.matches(this.id)
            .then(res => {
              console.log(res)
              this.matches = res.matches
              this.spinner.hide()
            })
            .catch(err => {
              console.log(err)
              this.spinner.hide()
              this.alerts.alertError('We dont have this data yet')
            })
  }

}
