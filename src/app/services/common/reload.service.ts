import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReloadService {
  
  refresPlay = new Subject<boolean>();

  constructor() { }


  get refreshAutoplay$(){
     return this.refresPlay;
  }

  needRefreshAutoPlay$(a:any){
     this.refresPlay.next(a);
  }
}
