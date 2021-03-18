import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Chartist from 'chartist';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertsService } from 'src/app/services/alerts/alerts.service';
import { ApiService } from 'src/app/services/api/api.service';
import { MyApiService } from 'src/app/services/myApi/my-api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  p: number = 1;
  e:any
  DEFAULT_PHOTO: string = 'https://i.imgur.com/jgJepiJ.jpg'

  leagues: any[] = []
  leaguesArray:any[] = []
  topLeagues: any[] = []
  myligues:any[] = []
  constructor(
    private api: ApiService,
    private router: Router,
    private alert: AlertsService,
    private spinner: NgxSpinnerService,
    private myApi: MyApiService
    ) { }

  ngOnInit(){
    this.getAllLeagues()
    this.getMyLeagues()
  }

  getAllLeagues(){
      this.spinner.show()
      this.api.getLeagues().then(res => {

      this.leagues = res.competitions
      this.leaguesArray = res.competitions
      console.log(this.leagues)
      this.filterTop()
       this.spinner.hide()

    })
    .catch(err => {
      console.log(err)
      this.spinner.hide()
      this.alert.alertError('Something went wrong, try again')
    })
  }

  filterTop(){
    this.topLeagues = this.leagues.filter(l => l.code === 'PD' || l.code === 'BL1' || l.code === 'PL' || l.code === 'SA' || l.code === 'FL1' )
    console.log(this.topLeagues)
  }



  redirect(code: string){
    if(!code){
      this.alert.alertError('We dont have this data yer')
      console.log(code, 'if')
    }
    else{
      console.log(code, 'else')
      this.router.navigate([`home/league/${code}`])
    }
  }

  getMyLeagues(){
    this.spinner.show()
    this.myApi.getLeagues()
          .then(res => {
            console.log(res)
            this.spinner.hide()
            this.myligues = res.leagues
          })
          .catch(err => {
            console.log(err)
            this.spinner.hide()
            this.alert.alertError("Something went wrong, try again.")
          })
  }

  saveLeague(league){
    this.spinner.show()
    console.log(league.code, 'else')
    this.myApi.saveLeague(league)
    .then(res => {
    this.spinner.hide()
      console.log(res)
      this.alert.alertSuccess('League Saved')
    })
    .catch(err => {
      this.spinner.hide()
      this.alert.alertError('Something went wrong, try again')
      console.log(err)
    })
  }

  filterLeagues(term:string){
    let filter = this.leaguesArray.filter(l => l.name.toLowerCase().includes(term.toLowerCase()) || l.area.name.toLowerCase().includes(term.toLowerCase())   )
    term !== '' ? this.leaguesArray = filter : this.leaguesArray = this.leagues
  }

  save(league){
    if(!league.code){
      this.alert.alertError('We dont have this data yer')
      console.log(league.code, 'if')
    }
    else{
      let existsLeague = this.myligues.find(l => l.idLeague == league.id)
      if(!existsLeague){
        this.saveLeague(league)
      }else{
        this.alert.alertError('This league is already saved')
      }
    }
  }
}
