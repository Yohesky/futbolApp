import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-matches',
  templateUrl: './list-matches.component.html',
  styleUrls: ['./list-matches.component.css']
})
export class ListMatchesComponent implements OnInit {
  @Input('type') type: string
  @Input('matches') matches:any[] = []
  dataMatches: any[] = []
  p: number = 1;
  total: number

  constructor() { }

  ngOnInit(): void {
    console.log("?=")
    this.filterMatches()
  }

  filterMatches(){
    if(this.type === 'FINISHED'){
      this.dataMatches = this.matches.filter(m => m.status === this.type)
      this.total = this.dataMatches.length
      console.log(this.dataMatches)
    }

    if(this.type === 'SCHEDULED'){
      this.dataMatches = this.matches.filter(m => m.status === this.type)
      this.total = this.dataMatches.length
      console.log(this.dataMatches)
    }

    if(this.type === 'OTHERS'){
      this.dataMatches = this.matches.filter(m => m.status !== 'SCHEDULED' && m.status !== 'FINISHED')
      this.total = this.dataMatches.length
      console.log(this.dataMatches)
    }
  }


  search(value:string){
    this.dataMatches = this.dataMatches.filter(m => m.homeTeam.name.toLowerCase().includes(value.toLowerCase()))
    value == '' ? this.dataMatches = this.matches : this.dataMatches
  }

}
