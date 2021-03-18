import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http"
import { environment } from './../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }


  get(url: string, params?: any): Promise<any>{
    return new Promise((resolve,reject) => {
      return this.http.get(`${environment.API_URL}${url}`, {params})
              .subscribe( (res:any) => {
                resolve(res)
              },
               (error) => {
                 reject(error)
               }
              )
    })
  }

  getMyApi(url: string, params?: any): Promise<any>{
    return new Promise((resolve,reject) => {
      return this.http.get(`${environment.API_SERVER}${url}`, {params})
              .subscribe( (res:any) => {
                resolve(res)
              },
               (error) => {
                 reject(error)
               }
              )
    })
  }


  post(url: string, params?: any): Promise<any>{
    return new Promise((resolve,reject) => {
      return this.http.post(`${environment.API_SERVER}${url}`, params)
              .subscribe( (res:any) => {
                resolve(res)
              },
               (error) => {
                 reject(error)
               }
              )
    })
  }

  delete(url: string, params?: any): Promise<any>{
    return new Promise((resolve,reject) => {
      return this.http.delete(`${environment.API_SERVER}${url}`, params)
              .subscribe( (res:any) => {
                resolve(res)
              },
               (error) => {
                 reject(error)
               }
              )
    })
  }



}
