import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    this.authService.loginWithPopup()
        .subscribe(res => {
          console.log(res)

          this.authService.user$.subscribe(res => {
            localStorage.setItem("id", res.sub)
          })

          this.router.navigate(['home'])
        })
  }

}
