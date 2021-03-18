import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpService) { }

  getLeagues(){
    return this.http.get('competitions')
  }

  getLeague(competition:string){
    return this.http.get(`competitions/${competition}/matches`)
  }

  getTeamSingular(id:number){
    return this.http.get(`competitions/${id}/teams`)
  }

  team(id:number){
    return this.http.get(`teams/${id}`)
  }

  player(id:number){
    return this.http.get(`players/${id}/matches`)
  }

  scores(league:string){
    return this.http.get(`competitions/${league}/scorers`)
  }

  matches(id:number){
    return this.http.get(`teams/${id}/matches`)
  }

  table(id:number){
    return this.http.get(`competitions/${id}/standings`)
  }
}
