import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertsService } from 'src/app/services/alerts/alerts.service';
import { ApiService } from 'src/app/services/api/api.service';
import { MyApiService } from 'src/app/services/myApi/my-api.service';

@Component({
  selector: 'app-my-positions',
  templateUrl: './my-positions.component.html',
  styleUrls: ['./my-positions.component.css']
})
export class MyPositionsComponent implements OnInit {
  p: number = 1;
  positions:any[] = []
  tables: any[] = []
  constructor(
    private as: ActivatedRoute,
    private api: ApiService,
    private alerts: AlertsService,
    private spinner: NgxSpinnerService,
    private myApi: MyApiService
  ) { }

  ngOnInit(): void {
    this.getPositions()
  }

  getPositions(){
    this.spinner.show()
    this.myApi.getPositions()
          .then(res => {
            console.log(res)
            this.spinner.hide()
            this.positions = res.positions
            console.log(this.positions)
            this.getTables()
          })
          .catch(err => {
            console.log(err)
            this.spinner.hide()
            this.alerts.alertError("Something went wrong, try again.")
          })
  }

  getTables(){
    this.positions.forEach(p => {
      let code:number = Number(p.code)
      this.api.table(code)
            .then(res => {
              console.log(res)
              this.tables.push(res.standings[0])
              console.log(this.tables)
            })
            .catch(err => {
              console.log(err)
            })
    })
  }

}
