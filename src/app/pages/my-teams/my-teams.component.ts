import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertsService } from 'src/app/services/alerts/alerts.service';
import { ApiService } from 'src/app/services/api/api.service';
import { MyApiService } from 'src/app/services/myApi/my-api.service';

@Component({
  selector: 'app-my-teams',
  templateUrl: './my-teams.component.html',
  styleUrls: ['./my-teams.component.css']
})
export class MyTeamsComponent implements OnInit {
  p: number = 1;

  teams:any[] = []
  constructor(
    private myApi: MyApiService,
    private api: ApiService,
    private router: Router,
    private alert: AlertsService,
    private spinner: NgxSpinnerService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.getMyTeams()
  }

  getMyTeams(){
    this.spinner.show()
    this.myApi.getTeams()
          .then(res => {
            console.log(res)
            this.spinner.hide()
            this.teams = res.teams
          })
          .catch(err => {
            console.log(err)
            this.spinner.hide()
            this.alert.alertError("Something went wrong, try again.")
          })
  }

  redirect(code: number){
    if(!code){
      console.log(code, 'if')
      this.alert.alertError('We dont have this data yet')
    }
    else{
      console.log(code, 'else')
      this.router.navigate([`home/team/${code}`])
    }
  }

  deleteTeam(code:number){
    let codeNumber = Number(code)
    console.log(codeNumber)
    console.log(this.teams)
    this.spinner.show()
    this.myApi.deleteTeam(codeNumber)
              .then(res => {
                this.spinner.hide()
                if(res.ok){
                  console.log(typeof codeNumber)
                  let arr = this.teams.filter(l => Number(l.idTeam) !== codeNumber)
                  this.teams = arr
                  this.cd.detectChanges()
                }
              })
              .catch(err => {
                console.log(err)
                this.spinner.hide()
                this.alert.alertError('Something went wrong, try again')
              })
  }

}
