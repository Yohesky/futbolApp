import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Location } from '@angular/common';
import { ApiService } from 'src/app/services/api/api.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AlertsService } from 'src/app/services/alerts/alerts.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
})
export class TeamComponent implements OnInit {
  idTeam: number = 0;
  team: any;
  p: number = 1;
  playerHistory: any;

  constructor(
    private as: ActivatedRoute,
    private api: ApiService,
    private _location: Location,
    private modalService: NgbModal,
    private alerts: AlertsService,
    private spinner: NgxSpinnerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getParams();
    this.getTeam();
  }

  getParams() {
    this.idTeam = this.as.snapshot.params.idTeam;
  }

  player(modal, id: number) {
    this.spinner.show()

    this.modalService
      .open(modal, { size: 'lg' })
      .result.then((result) => console.log(result));
    this.api
      .player(id)
      .then((res) => {
    this.spinner.hide()

        console.log(res);
        this.playerHistory = res;
      })
      .catch((err) => {
        console.log(err);
    this.spinner.hide()

        this.alerts.alertError('We dont have this data yet');
      });
  }

  getTeam() {
    this.spinner.show()

    this.api
      .team(this.idTeam)
      .then((res) => {
    this.spinner.hide()

        console.log(res);
        this.team = res;
      })
      .catch((err) => {
    this.spinner.hide()

        console.log(err);
        this.alerts.alertError('We dont have this data yet');
      });
  }

  redirect(code: string){
    if(!code){
      this.alerts.alertError('We dont have this data yer')
      console.log(code, 'if')
    }
    else{
      console.log(code, 'else')
      this.router.navigate([`home/match/${code}`])
    }
  }

}
