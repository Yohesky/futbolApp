import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/home', title: 'Home',  icon: 'fas fa-home', class: '' },
    { path: 'teams', title: 'Teams',  icon: 'fas fa-users', class: '' },
    { path: 'top-scores', title: 'Top Scores',  icon: 'fas fa-meteor', class: '' },
    { path: 'positions', title: 'Positions',  icon: 'fas fa-trophy', class: '' },
    { path: 'myLeagues', title: 'My Leagues',  icon: 'fas fa-sort-amount-up-alt', class: '' },
    { path: 'myPositions', title: 'My Positions',  icon: 'fas fa-sort-numeric-up', class: '' },
    { path: 'myTeams', title: 'My Teams',  icon: 'far fa-futbol', class: '' },


];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ( window.innerWidth > 991) {
          return false;
      }
      return true;
  };
}
