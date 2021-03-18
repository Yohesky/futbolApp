import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class MyApiService {

  constructor(private http: HttpService) {}

  saveLeague(league){
    return this.http.post("leagues/saveLeague", league)
  }

  getLeagues(){
    return this.http.getMyApi("leagues/getLeagues")
  }

  deleteLeague(code:number){
    return this.http.delete(`leagues/deleteLeague/${code}`)
  }

  deleteTeam(code:number){
    return this.http.delete(`teams/deleteTeam/${code}`)
  }

  saveTeam(team){
    return this.http.post("teams/saveTeam", team)
  }

  savePositions(code:number){
    return this.http.post("positions/savePositions", {code})
  }

  getPositions(){
    return this.http.getMyApi("positions/getPositions")
  }

  getTeams(){
    return this.http.getMyApi("teams/getTeams")
  }

}
