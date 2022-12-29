import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NgxLoaderService {

  loader = false;

  constructor() { }
  /**
   * LODDER  CONTROLL SERVICES
   * onShowLoader()
   * onHideLoader()
   */
  onShowLoader() {
    this.loader = true;
  }
  onHideLoader() {
    this.loader = false;
  }
}
