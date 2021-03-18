import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ApiService } from 'src/app/services/api/api.service';
import Swal from 'sweetalert2';
import { AlertsService } from 'src/app/services/alerts/alerts.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-data-league',
  templateUrl: './data-league.component.html',
  styleUrls: ['./data-league.component.css']
})
export class DataLeagueComponent implements OnInit {
  currentJustify = 'start';

  code: string = ''
  competition: any = {}
  matches: any[] = []
  constructor(
    private as: ActivatedRoute,
    private api: ApiService,
    private _location: Location,
    private alerts: AlertsService,
    private spinner: NgxSpinnerService
    ) { }

  ngOnInit(): void {
    this.getParams()
    this.getData()
  }

  getParams(){
    this.code = this.as.snapshot.params.name
  }

  getData(){
    this.spinner.show()
    this.api.getLeague(this.code)
            .then(res => {
    this.spinner.hide()

              console.log(res)
              this.competition = res.competition
              this.matches = res.matches
            })
            .catch(err => {
              console.log(err)
    this.spinner.hide()

              this.alerts.alertError('We dont have this data yet')
              this._location.back()
            })
  }


}
