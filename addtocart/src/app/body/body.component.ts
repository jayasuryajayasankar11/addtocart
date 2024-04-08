import { Component } from '@angular/core';
import { cardtype } from '../data/datatype';
import { arrobj } from '../data/data';
import { CommonModule } from '@angular/common';
import { CartserviceService } from '../services/cartservice.service';
import { __values } from 'tslib';
import { PopupComponent } from '../popup/popup.component';
import { SidenavComponent } from '../sidenav/sidenav.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CommonModule,PopupComponent,SidenavComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  constructor(private service: CartserviceService) {
      this.service.mysubject$.subscribe({
        next(data){console.log();},
        error(data){},
        complete(){}
      })
  }

  

  public arrobj: cardtype[] = arrobj;

 

  handleAddQ(productname: string) {
    this.arrobj.forEach((value) => {
      if (value.name == productname) {
        value.orderedq += 1;
      }
    })
  }

  handlesubQ(productname: string) {
    this.arrobj.forEach((value) => {
      if (value.name == productname && value.orderedq > 0) {
        value.orderedq -= 1;
      }
    })
  }

  addtocart(productname:string){
    this.arrobj.forEach((value) => {
      if (value.name == productname && value.orderedq > 0) {
        value.addtocart = true;

      }
    })

    let count = 0;
    this.arrobj.forEach((val)=>{
      if(val.addtocart) count++;
    })

    this.service.senddata(count);

  }

  



  
  




}
