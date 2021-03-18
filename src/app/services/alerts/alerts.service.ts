import { Injectable } from '@angular/core';
import Swal from "sweetalert2"

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor() { }


  alertSuccess(msg: string){
    Swal.fire({
      text: `${msg}`,
      icon: 'success'
    })
  }

  alertError(msg: string){
    Swal.fire({
      text: `${msg}`,
      icon: 'info'
    })
  }

}
