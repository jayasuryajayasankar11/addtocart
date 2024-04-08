import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartserviceService {

  constructor() { }

  private mysubject = new Subject<number>();
  mysubject$ = this.mysubject.asObservable();

  private mysubject1 = new Subject<boolean>();
  mysubject1$ = this.mysubject1.asObservable();

  private mysubject2 = new Subject<boolean>();
  mysubject2$ = this.mysubject2.asObservable();


  senddata(quantity:number){
    this.mysubject.next(quantity);
  }


  popup(value:boolean){
    this.mysubject1.next(value);
  }

  sidenav(val:boolean){
    this.mysubject2.next(val);
  }
}
 