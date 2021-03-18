import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertsService } from 'src/app/services/alerts/alerts.service';
import { ApiService } from 'src/app/services/api/api.service';
import { MyApiService } from 'src/app/services/myApi/my-api.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  team: string = ''
  teams:any[] = []
  leagues: any[] = []
  teamsOfLeagues: any[] = []
  select: boolean = false
  DEFAULT_PHOTO: string = 'https://i.imgur.com/jgJepiJ.jpg'
  myteams:any[] = []
  constructor(
    private api: ApiService,
    private router: Router,
    private alerts: AlertsService,
    private spinner: NgxSpinnerService,
    private myApi: MyApiService
    ) { }

  ngOnInit(): void {
    this.getAllTeams()
    this.getMyTeams()
  }


  getAllTeams(){
    this.spinner.show()

    this.api.getLeagues()
            .then(res => {
              console.log(res)
              this.teams = res.competitions
              console.log(this.teams)
    this.spinner.hide()

            })
            .catch(err => {
              console.log(err)
    this.spinner.hide()

              this.alerts.alertError('Something went wrong')
            })
  }

  searchTeam(){
    let leagues = this.teams.filter(t => t.area.name.toLowerCase() == this.team.toLowerCase())
    this.leagues = leagues
    if(this.leagues.length == 0){
      this.alerts.alertError('No league found')
    }
  }

  selected(id:number){
    this.spinner.show()

    this.select = true
    this.api.getTeamSingular(id)
            .then(res => {

              console.log(res)
              this.teamsOfLeagues = res.teams
              console.log(this.teamsOfLeagues)
              this.spinner.hide()
            })
            .catch(err => {
              console.log(err)
    this.spinner.hide()

              this.alerts.alertError('We dont have this data yet');
            })
  }

  redirect(code: number){
    if(!code){
      console.log(code, 'if')
      this.alerts.alertError('We dont have this data yet')
    }
    else{
      console.log(code, 'else')
      this.router.navigate([`home/team/${code}`])
    }
  }

  getMyTeams(){
    this.spinner.show()
    this.myApi.getTeams()
          .then(res => {
            console.log(res)
            this.spinner.hide()
            this.myteams = res.teams
          })
          .catch(err => {
            console.log(err)
            this.spinner.hide()
            this.alerts.alertError("Something went wrong, try again.")
          })
  }


  saveTeam(team){
    this.spinner.show()
      this.myApi.saveTeam(team)
      .then(res => {
      this.spinner.hide()
        console.log(res)
        this.alerts.alertSuccess('Team Saved')
      })
      .catch(err => {
        this.spinner.hide()
        this.alerts.alertError('Something went wrong, try again')
        console.log(err)
      })
  }

  comprobe(team){
    let existsTeam = this.myteams.find(l => l.idTeam == team.id)
    if(!existsTeam){
      this.saveTeam(team)
    }else{
      this.alerts.alertError('This team is already saved')
    }
  }

}
