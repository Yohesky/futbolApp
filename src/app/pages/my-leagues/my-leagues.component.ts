import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertsService } from 'src/app/services/alerts/alerts.service';
import { ApiService } from 'src/app/services/api/api.service';
import { MyApiService } from 'src/app/services/myApi/my-api.service';

@Component({
  selector: 'app-my-leagues',
  templateUrl: './my-leagues.component.html',
  styleUrls: ['./my-leagues.component.css']
})
export class MyLeaguesComponent implements OnInit {
  p: number = 1;
  e:any
  DEFAULT_PHOTO: string = 'https://i.imgur.com/jgJepiJ.jpg'
  leagues:any[] = []
  constructor(
    private myApi: MyApiService,
    private api: ApiService,
    private router: Router,
    private alert: AlertsService,
    private spinner: NgxSpinnerService,
    private cd: ChangeDetectorRef
    ) { }

  ngOnInit(): void {
    this.getMyLeagues()
  }

  getMyLeagues(){
    this.spinner.show()
    this.myApi.getLeagues()
          .then(res => {
            console.log(res)
            this.spinner.hide()
            this.leagues = res.leagues
          })
          .catch(err => {
            console.log(err)
            this.spinner.hide()
            this.alert.alertError("Something went wrong, try again.")
          })
  }

  redirect(code: string){
    this.router.navigate([`home/league/${code}`])
  }

  deleteLeague(code:number){
    let codeNumber = Number(code)
    console.log(codeNumber)
    console.log(this.leagues)
    this.spinner.show()
    this.myApi.deleteLeague(codeNumber)
              .then(res => {
                this.spinner.hide()
                if(res.ok){
                  console.log(typeof codeNumber)
                  let arr = this.leagues.filter(l => Number(l.idLeague) !== codeNumber)
                  this.leagues = arr
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
