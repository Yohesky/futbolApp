import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { NgxSpinnerService } from 'ngx-spinner';
import { MyApiService } from 'src/app/services/myApi/my-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  dataUser
  constructor(public authService: AuthService, private router: Router, private spinner: NgxSpinnerService, private myApi: MyApiService) { }

  ngOnInit(): void {
  }

  login(){
    this.authService.loginWithPopup()
        .subscribe(res => {
          console.log(res)

          this.authService.user$.subscribe(res => {
            localStorage.setItem("id", res.sub)
          })

          this.getDataUser()

          this.router.navigate(['home'])
        })
  }

  getDataUser(){
    this.spinner.show()
    this.authService.user$.subscribe(res => {
      this.dataUser = res
      this.myApi.sendEmail(this.dataUser)
                .then(res => {
                  console.log('api',res)
                  this.spinner.hide()
                })
                .catch(err => {
                  console.log(err)
                  this.spinner.hide()
                })
    })
  }

}
